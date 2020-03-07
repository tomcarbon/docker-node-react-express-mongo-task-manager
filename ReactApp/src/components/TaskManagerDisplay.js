/*******************************************
* TaskManagerDisplay.js -- demo
******************************************/
import React from "react";
import '../css/taskmanager.css';




class TaskManagerDisplay extends React.Component {
        constructor() {
                super();
                this.state = { 
                };
	}

	quickAdd = (id_name, stg, element_type, classname, special) => {
                var xx1 = document.getElementById(id_name);
                var NewDiv1 = document.createElement(element_type);             // like "p" as in <p></p>
		var self = this;
                NewDiv1.className+= classname;
                NewDiv1.innerHTML = stg;
                if (special && element_type === "button" && id_name === this.props.idname) {
                        NewDiv1.onclick = function(){
				/*
				alert("clicked on following instance: " + special['idx'] + " and " + special['bType'] + "."); 
				*/
				if (special['bType'] === 'delete') {
					if (self.props.deleteRecord) {
						self.props.deleteRecord(special['idx'], true);
					}
				} else if (special['bType'] === 'edit') {
					if (self.props.editRecord) {
						self.props.editRecord(special['idx']);
					}
				}
                        };
                }
                xx1.appendChild(NewDiv1);
        }
	
	quickDeleteEverything = (id_name) => {
		var xx1 = document.getElementById(id_name);
		while (xx1.hasChildNodes()) {
			xx1.removeChild(xx1.lastChild);
		}
	}

	displayTheList = () => {
		this.props.openPleaseWait();
		this.quickDeleteEverything(this.props.idname);
		var unsortedList = [];
		unsortedList = JSON.parse(sessionStorage.getItem("voila"));
		this.quickAdd(this.props.idname, "TASK", "div", "tm-title1");
		this.quickAdd(this.props.idname, "PRIORITY", "div", "tm-title2"); 

		if (!unsortedList) {
			return;
		}
		
                var arr = unsortedList.sort(function (a,b) {
                        return (a.sortidx - b.sortidx || a.text - b.text);
                });

		var self = this;
		setTimeout (function () {
			sessionStorage.setItem("voila", JSON.stringify(arr));
			for (var i=0; i < arr.length; i++) {
				self.quickAdd(self.props.idname, arr[i].text, "div", "tm-text");
				switch (arr[i].priority) {
					case "low":
						self.quickAdd(self.props.idname, arr[i].priority, "div", "tm-priority tm-green");
						break;
					case "medium":
						self.quickAdd(self.props.idname, arr[i].priority, "div", "tm-priority tm-yellow");
						break;
					case "high":
						self.quickAdd(self.props.idname, arr[i].priority, "div", "tm-priority tm-red");
						break;
					default: break;
				}
				var a = {idx: i, bType: 'edit'}; 
				self.quickAdd(self.props.idname, "edit", "button", "tm-button", a);
				var b = {idx: i, bType: 'delete'}; 
				self.quickAdd(self.props.idname, "delete", "button", "tm-button", b);
			}
			self.props.closePleaseWait();
		}, 500);
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if(prevProps.forceit !== this.props.forceit) {
			this.displayTheList();
		}
	}


  render() {
	var displayTheList = this.displayTheList.bind(this);	
      return (
	<div className="tm-listbox">
		<div 
			id={this.props.idname}
			forceit={this.props.forceit}  
			onChange={displayTheList}> 
		</div>
	</div>
      );
  }
}

export default TaskManagerDisplay;
