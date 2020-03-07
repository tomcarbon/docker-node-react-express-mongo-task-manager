/********************************************************************
 * Nav -- navigation for the site
 *******************************************************************/
import React from 'react';
import A1 from "../Screens/A1"  // HOME
import B1 from "../Screens/B1"  // about


class Nav extends React.Component {

        constructor(props) {
                super(props);
                this.state = {
                        initialText: ""
                };
        }

        newText = (a) => {
                this.setState({initialText: a});
        }

        render () {
                var newText = this.newText;
                if (this.props.dest === 'A1') {
                        return (
                                <A1 />
                        );
                } else if (this.props.dest === 'B1') {
                        return (
                                <B1
                                        initialText={this.state.initialText}
                                        newText={newText.bind(this)}
                                />
                        );
                } else {
                        console.info("Unexpected value of " + this.props.dest + "'. Resetting to A1");
                        return (
                                <A1 />
                        );
                }
        }
}
export default Nav;

