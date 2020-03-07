
**DOCKER-REACT-DUNGEONS-DRAGONS-DICE-ROLLER** (and notepad)

******************************************************************************

This repository contains the inner workings of [DungeonsDragonsDiceRoller.com](https://dungeonsdragonsdiceroller.com). 

******************************************************************************

**About This Program**

This website application has a mobile-friendly GUI and provides the user (e.g.: D&D Dungeon Master) with a virtual set of D&D Dice. Also, this program has a simple general-purpose notepad with large, easy-to-read font. Also there is a "Word Streamer", for random inspiration.

This application runs from a docker container on localhost port 80, using node, npm, yarn, react, react-bootstrap (width<400px OK). The docker container uses an installation of Ubuntu 18.04 with several common tools (such as byobu and vim) installed. 

The dice are: d20, d12, d10, d10 (x10), d8, d6, d4.

**Installation**: 

The program is easy to install if you're running linux: first install docker. Then run the 'doit' script (options b, then r). Finally, after a minute, check localhost on your browser.

**Notes**
1) The first time is probably going to take several minutes, a few warnings, and the install may even appear to hang after the "Happy hacking! Done in xx.xxs." messages. Hang in there. After the first time things should go much quicker. Also, the first time, if you get a timeout error (esp. with yarn install), run option 'b' again and that should resolve the issue.
2) After running the container, make sure to give yarn about a minute to start up the server, before checking the output on your browser at localhost.
3) 'doit' is a LINUX script. If you are not running linux then deconstruct this script to determine your build and run docker commands. 
4) If you have node/npm installed and do not want to run docker, from the docker-react-dungeons-dragons-dice-roller directory run 'npm install' (or yarn install), followed by 'npm start' (or yarn start).
5) If you're curious about the back-end used to support this website, this docker container is running on an AWS 'micro' instance of Ubuntu 18.04. Once you're SSHed into your EC2 instance, run the following commands, and (if your HTTP port 80 is open with your security configuration), the application should appear at the public IP for the EC2 instance. From the shell in EC2:

     a) git clone https://github.com/tomcarbon/docker-react-dungeons-dragons-dice-roller

     b) sudo snap install docker

     c) sudo ./doit (options b, then (r or m))

************************************************

This D&D Dice Roller application was built using the [docker-react-website starter](https://github.com/tomcarbon/docker-react-website-starter).

*(this page last updated: 20200229)*

DTCarbon6cWX1f5YTjidDrpEnypoatsrH8
