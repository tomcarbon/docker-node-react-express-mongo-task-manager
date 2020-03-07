/*******************************************
* TaskManagerAddTaskTextBox.js -- demo
* *****************************************/
import React from "react";
import '../css/taskmanager.css';

class TaskManagerAddTaskTextBox extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			value: '', 
			hideAddTaskButton: true 
		};
		this.handleChange = this.handleChange.bind(this);
		var updateTextBox = this.props.updateTextBox;
		updateTextBox(""); 
	}

	componentDidMount() {
		if (this.props.erec.edit === true) {
			this.setState({value: this.props.erec.txt});
			this.setState({hideAddTaskButton: false});
			var updateTextBox = this.props.updateTextBox;
			updateTextBox(this.props.erec.txt);
		}
	}

	handleChange(event) {
		this.setState({value: event.target.value});
		if (event.target.value === "") {
			this.setState({hideAddTaskButton: true});
		} else {
			this.setState({hideAddTaskButton: false});
		}
		var updateTextBox = this.props.updateTextBox;
		updateTextBox(event.target.value);
	}

	render(){
		return(
			<div>
				<textarea 
					style={{resize:'none', wordWrap:"break-word"}} 
					value={this.state.value} 
					onChange={this.handleChange} 
					maxLength="30" 
				/>
			</div>

		)
	}
}

export default TaskManagerAddTaskTextBox;
