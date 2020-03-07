/*******************************************
* TaskManagerPleaseWait.js -- demo
* *****************************************/
import React from "react";
import ReactModal from 'react-modal';

class TaskManagerPleaseWait extends React.Component {


	render() {
		return(
			<ReactModal isOpen={this.props.amOpen} >
				Please Wait!
			</ReactModal>
		)
	}
}

export default TaskManagerPleaseWait;
