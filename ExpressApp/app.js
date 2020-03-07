const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const options = {
	  useNewUrlParser: true,
	  reconnectTries: Number.MAX_VALUE,
	  reconnectInterval: 500,
	  connectTimeoutMS: 10000,
};

mongoose
  .connect(
      'mongodb://mongo:27017/docker-node-mongo',
	  options
    )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const Item = require('./models/Item');

app.get('/', (req, res) => {
          res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

          Item.find()
             .then(items => res.send(JSON.stringify(items)))
            .catch(err => res.status(404).json({ msg: 'Well, No items found.' }));
});

app.post('/item/add', (req, res) => {
          res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  console.info("in item/add");
          const items = new Item({
                      name:  req.body.name,
		      priority: req.body.priority
                    });
          items.save().then(item => res.redirect('/'));
});

app.post('/item/delete', (req, res) => {
          res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
          res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  console.info("in item/delete req.body._id = " + req.body._id);
	  Item.find({_id: req.body._id}).remove().exec();
});

const port = 3000;

app.listen(port, () => console.log('Server running...'));

