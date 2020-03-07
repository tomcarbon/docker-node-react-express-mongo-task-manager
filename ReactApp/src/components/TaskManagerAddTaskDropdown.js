/*******************************************
* TaskManagerAddTaskDropdown.js -- demo
        constructor(props) {
                super(props);
                this.state = { value: '', hideAddTaskButton: true };
                this.handleChange = this.handleChange.bind(this);
                                value={this.state.selectValue} 
* *****************************************/
import React from "react";
import '../css/taskmanager.css';


class TaskManagerAddTaskDropdown extends React.Component {

        constructor(props) {
                super(props);
                this.state = {
                        value: ""
                };
                this.handleChange = this.handleChange.bind(this);
        }

        componentDidMount() {
                var updateDropdown = this.props.updateDropdown;
                if (this.props.erec.edit === true) {
                        this.setState({value: this.props.erec.priority});
                        updateDropdown(this.props.erec.priority);
                } else {
                        updateDropdown("high");
                }
        }

        handleChange(e) {
                this.setState({value: e.target.value});
                var updateDropdown = this.props.updateDropdown;
                updateDropdown(e.target.value);
        }

        render() {
                return (
                        <div >

                                <select
                                        onChange={this.handleChange}
                                        value={this.state.value}
                                >
                                        <option value="high">high</option>
                                        <option value="medium">medium</option>
                                        <option value="low">low</option>
                                </select>

                        </div>
                );
        }
}




export default TaskManagerAddTaskDropdown;

