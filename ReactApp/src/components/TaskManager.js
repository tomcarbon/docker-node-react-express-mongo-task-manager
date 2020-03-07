/*******************************************
* TaskManager.js -- demo
******************************************/
import React from "react";
import '../css/taskmanager.css';
import TaskManagerAddTask from "./TaskManagerAddTask";
import TaskManagerDisplay from "./TaskManagerDisplay";
import TaskManagerPleaseWait from "./TaskManagerPleaseWait";


class TaskManager extends React.Component {
        constructor() {
                super();
                this.state = {
                        isModalOpen: false,
                        isPleaseWaitOpen: false,
                        readyDropdown: "",
                        readyTextBox:  "medium",
                        arr:            [],
                        forceit:   0,
                        erec: {edit: false, idx: 0, txt: "", priority: "", _id:""}
                };
                sessionStorage.clear();
        }

        editRecord = (index) => {
                var myList = JSON.parse(sessionStorage.getItem("voila"));
                this.setState({arr: myList});
                var text = this.state.arr[index].text;
                var priority = this.state.arr[index].priority;
                this.setState({ erec: {edit: true, idx: index, txt: text, priority: priority, _id:this.state.arr[index]._id}});
                this.openModal();
        }

	componentDidMount ()  {
		this.loaditup();
	}

	/* load everything from the mongo database */
	loaditup = () => {
		console.info("top of loaditup");
		this.openPleaseWait();
		var work = "http://localhost:3000/";
		var that = this;
		var y = [];
		var sortidx;
		/* load all the stored data from mongoDB (if any) and display it */
		fetch(work)
			.then((resp) => resp.json())
			.then(function(data) {
				for (var i=0;i < data.length; i++) {
					switch(data[i].priority) {
						case "high":    sortidx = 1; break;
						case "medium":  sortidx = 2; break;
						case "low":     sortidx = 3; break;
						default:        break;
					}
					y.push({ _id: data[i]._id, sortidx: sortidx, text: data[i].name, priority: data[i].priority});
					/*
					console.info(i + ": " + JSON.stringify(data[i]));
					*/
				}
			}).then(() => {
				that.setState({arr:y})}
			).then(() => {
				sessionStorage.setItem("voila", JSON.stringify(this.state.arr));
			}).then(() => {
				var z = that.state.forceit + 1;
				that.setState({forceit: z});
			}).catch( err => {
				console.info("err = " + JSON.stringify(err));
		        });
	}

	/* delete one record from Mongo DB */
	deleteit = (a) => {
		console.info("top of delete it");
		var body = "_id=" + a ;
                var work = "http://localhost:3000/item/delete/";
		(async () => {
			  const rawResponse = await fetch(work, {
				      method: 'POST',
				      headers: { "Content-Type": "application/x-www-form-urlencoded" },
				      body:body 
				    });
			  const content = await rawResponse.json();
			  console.log(content);
		})();
	}

        deleteRecord = (index, confirmMessage) => {
                if (confirmMessage === true) {
                        if (window.confirm("Are you sure you want to remove this task?") === false ) {
                                this.closePleaseWait();
                                return;
                        }
                } 
		var myList = this.state.arr;
                var newArr = [];

		console.info("value of index._id = " + myList[index]._id);
		this.deleteit(myList[index]._id);
		/* here is the actual delete , the omission of the record when re-writing */
                for (var i=0; i<myList.length ; i++) {
                        if (i === index) {
                        } else {
                                newArr.push(myList[i]);
                        }
                }
		/*
		this.setState({arr: newArr});
		*/
		this.loaditup();
        }

        openModal = () => {
                this.setState({ isModalOpen: true});
        }
        cancelModal() {
                this.setState({ isModalOpen: false});
                this.setState({ erec: {edit: false, idx: 0}});
        }
        closeModal = () => {
                this.setState({ isModalOpen: false});
                /* load sessionStorage if any */

                if (this.state.readyTextBox !== "") {
                        var sortidx;
                        switch(this.state.readyDropdown) {
                                case "high":    sortidx = 1; break;
                                case "medium":  sortidx = 2; break;
                                case "low":     sortidx = 3; break;
                                default:        break;
                        }
                        var y = [];
                        y = this.state.arr;
                        y.push({ sortidx: sortidx, text: this.state.readyTextBox, priority: this.state.readyDropdown });
                        this.setState({arr:y});
			this.addit(this.state.readyTextBox, this.state.readyDropdown);
                }

                if (typeof(Storage) !== "undefined") {
                        sessionStorage.setItem("voila", JSON.stringify(this.state.arr));
                } else {
                        alert("Sorry, session storage is not supported on this browser.");
                }

                if (this.state.erec['edit'] === true) {
                        this.deleteRecord(this.state.erec['idx'], false);
                        this.setState({ erec: {edit: false, idx: 0}});
                } else {
			this.loaditup();
                }
        }

	addit = (a,b) => {
		var body = "name=" + a + "&priority=" + b;
                var work = "http://localhost:3000/item/add/";
		(async () => {
			  const rawResponse = await fetch(work, {
				      method: 'POST',
				      headers: { "Content-Type": "application/x-www-form-urlencoded" },
				      body:body 
				    });
			  const content = await rawResponse.json();
			  console.log(content);
		})();
	}
        openPleaseWait = () => {
                this.setState({ isPleaseWaitOpen: true});
        }
        closePleaseWait = () => {
                this.setState({ isPleaseWaitOpen: false});
        }

        updateDropdown(a) {
                this.setState({ readyDropdown: a});
        }

        updateTextBox(a) {
                this.setState({ readyTextBox: a});
        }

  render() {
        var closeModal = this.closeModal;
        var cancelModal = this.cancelModal;
        var openPleaseWait = this.openPleaseWait;
        var closePleaseWait = this.closePleaseWait;
        var updateTextBox = this.updateTextBox;
        var updateDropdown = this.updateDropdown;

      return (
        <div className="tm-body">
                <div style={{width:"100%", textAlign:"left"}}>
                        <button className="official-buttonstyle"
                                style={{marginBottom:"20px"}}
                                onClick={() => this.openModal()}>
                                Add a new task
                        </button>
                </div>

                <p></p>

                <TaskManagerAddTask
                        amOpen={this.state.isModalOpen}
                        closeModal={closeModal.bind(this)}
                        cancelModal={cancelModal.bind(this)}
                        updateTextBox={updateTextBox.bind(this)}
                        updateDropdown={updateDropdown.bind(this)}
                        erec={this.state.erec}
                />
                <TaskManagerPleaseWait amOpen={this.state.isPleaseWaitOpen}/>
                <TaskManagerDisplay
                        idname="display1"
                        openPleaseWait={openPleaseWait.bind(this)}
                        closePleaseWait={closePleaseWait.bind(this)}
                        deleteRecord={this.deleteRecord}
                        editRecord={this.editRecord}
                        forceit={this.state.forceit} />
        </div>
      );

  }
}

export default TaskManager;

