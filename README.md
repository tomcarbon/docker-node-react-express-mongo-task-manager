**docker-node-react-express-mongo-task-manager**

************************************************************

**About this Program**

This program is a three-tiered application consisting of the following parts:


React - website running on port 80

express - API running on port 3000

mongo - database

This program uses docker-compose. Run the following commands to build and run the site, which will then be accessible via the browser at localhost:

    docker-compose build
    docker-compose up

************************************************************

The program itself has two pages:

**HOME**

The main page with the Task Manager application.

**About**

Basically a copy of this README file.

************************************************************

**Instructions for using the Task Manager**

*To add a task:*

Click the Add a new task button.
Select the name of the task, and the priority (low, medium, or high).
Click the Add Task button to add this task to the manager.

*To edit a task:*

Click the edit button.
Change the Task Name and the Priority values as needed.
Click the Add Task button to re-save the task and return to the Task Manager.

*To delete a task:*

Click the delete button.
At the prompt, click OK to confirm the deletion.
You will be returned to the Task Manager


************************************************************

Note: To run this on your own server, replace the reference of 'localhost' in ReactApp/src/components/HTTP_ROOT.js with your own IPv4 IP address.

