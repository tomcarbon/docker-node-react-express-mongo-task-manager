/*******************************************
* B1.js -- About
* *****************************************/
import React from "react";
import "../css/site.css";
import Container from "react-bootstrap/Container";
/*
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
*/

class B1 extends React.Component {

        render() {
                return (
                        <Container
                                className="official-background-color special-font"
                                style={{textAlign:"left", marginTop:"10px"}}
                        >
                                <h2 >About this Program</h2>
                                <hr />
                                <p>This program is a three-tiered application consisting of the following parts:</p>
                                <ul>
                                        <li><strong>React</strong> - website running on port 80</li>
                                        <li><strong>express</strong> - API running on port 3000</li>
                                        <li><strong>mongo</strong> - database</li>
                                </ul>
                                <p>This program uses docker-compose. Run the following commands to build and run the site, which will then be accessible via the browser at localhost:</p>
                                <ol>
                                        <li>docker-compose build</li>
                                        <li>docker-compose up</li>
                                </ol>


                                <hr />

                                <p>The program itself has two pages:</p>
                                <h4>About</h4>
                                <p>This page you are reading.</p>
                                <h4>HOME</h4>
                                <h5>Instructions for using the Task Manager</h5>
                                <p>To add a task:</p>
                                <ol>
                                        <li>Click the <strong>Add a new task</strong> button.</li>
                                        <li>Select the name of the task, and the priority (low, medium, or high).</li>
                                        <li>Click the <strong>Add Task</strong> button to add this task to the manager.</li>
                                </ol>
                                <p>To edit a task:</p>
                                <ol>
                                        <li>Click the <strong>edit</strong> button.</li>
                                        <li>Change the <strong>Task Name</strong> and the <strong>Priority</strong> values as needed.</li>
                                        <li>Click the <strong>Add Task</strong> button to re-save the task and return to the Task Manager.</li>
                                </ol>
                                <p>To delete a task:</p>
                                <ol>
                                        <li>Click the <strong>delete</strong> button.</li>
                                        <li>At the prompt, click <strong>OK</strong> to confirm the deletion.</li>
                                        <li>You will be returned to the Task Manager</li>
                                </ol>

                        </Container>
                );
        }
}

export default B1;
