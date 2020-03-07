/******************************************************
 * 20200305
 * ********************************************************/
import React from 'react';
import MenuBar from "./components/MenuBar";
import Nav from "./components/Nav";
import "./css/site.css";

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { 
			dest: 'A1',
		};
	}

	handleToUpdate(a){
		/* variable passed from menu buttons located at MenuBar.js */
		this.setState({dest:a});
	}

	render() {
	  var handleToUpdate = this.handleToUpdate;
	  return (
		  <div className="official-background-color">
			<MenuBar 
		  		handleToUpdate={handleToUpdate.bind(this)} 
		  	/>

		  	<Nav 	
		  		dest={this.state.dest} 
		  	/>
		  </div>
	  );
	}
}

