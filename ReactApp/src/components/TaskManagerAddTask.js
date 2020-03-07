/*******************************************
* TaskManagerAddTask.js -- demo
        <modal isOpen={this.props.isOpen} >
					onChange={this._onSelect} 
					onClick={this.props.addTask("squirrel")}
					onClick={this.props.addTask(this.state.taskText)}
					updateTextBox={updateTextBox.bind(this)}
* *****************************************/
import React from "react";
import ReactModal from 'react-modal';
import '../css/taskmanager.css';
import 'react-dropdown/style.css';
import TaskManagerAddTaskTextBox from "./TaskManagerAddTaskTextBox";
import TaskManagerAddTaskDropdown from "./TaskManagerAddTaskDropdown";

class TaskManagerAddTask extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			value: '', 
			disableAddTaskButton: true,
			taskText: "",
			taskPriority: "",
		};
	}

	componentDidMount() {
		ReactModal.setAppElement('body');
	}

        updateTextBox(a) {
		this.setState({taskText: a});
		if (a === "") {
			this.setState({disableAddTaskButton: true});
		} else {
			this.setState({disableAddTaskButton: false});
		}
		this.props.updateTextBox(a);
        }

        updateDropdown(a) {
		this.setState({taskPriority: a});
		this.props.updateDropdown(a);
        }

	render(){
		var updateTextBox = this.updateTextBox;
		var updateDropdown = this.updateDropdown;
		return(
			<ReactModal 
				isOpen={this.props.amOpen} 
			>
			
				<p>Task Name:</p>
				<TaskManagerAddTaskTextBox 
					updateTextBox={updateTextBox.bind(this)}
					erec={this.props.erec}
				/>

				<p>Priority:</p>
				<TaskManagerAddTaskDropdown 
					updateDropdown={updateDropdown.bind(this)}
					erec={this.props.erec}
				/>

				<p></p>
				<hr style={{width:'100%'}} />
				<p></p>
				<button 
					disabled={this.state.disableAddTaskButton} 
					onClick={this.props.closeModal}
					>Add Task 
				</button>
				<button 
					onClick={this.props.cancelModal}
					>Cancel
				</button>

			</ReactModal>
		)
	}
}

export default TaskManagerAddTask;
