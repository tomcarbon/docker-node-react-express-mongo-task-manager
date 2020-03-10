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

**About**

Basically a copy of this README file.

**HOME**

Instructions for using the Task Manager

**To add a task:**

Click the Add a new task button.
Select the name of the task, and the priority (low, medium, or high).
Click the Add Task button to add this task to the manager.

**To edit a task:**

Click the edit button.
Change the Task Name and the Priority values as needed.
Click the Add Task button to re-save the task and return to the Task Manager.

**To delete a task:**

Click the delete button.
At the prompt, click OK to confirm the deletion.
You will be returned to the Task Manager


************************************************************


**KNOWN ISSUES:**

1) (resolved 20200309) Initialization: After running docker-compose, sometimes the Express container fails. The PLEASE WAIT Screen hangs. Restarting the container solves the problem. This seems to be an ordering issue with the docker-compose.

2) During use: The program freezes after deleting (or editing) six consequetive records. The PLEASE WAIT Screen hangs. It seems like the problem could be on the react side as there is no feedback whatsoever on the express server - ugh. I'll squash this bug.


These will get fixed.
