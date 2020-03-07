/*******************************************
 * MenuBar.js
 * ****************************************/
import React from 'react';
import "../css/site.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class MenuBar extends React.Component {

        render() {
                var handleToUpdate = this.props.handleToUpdate;
                return (
                            <Container className="official-menu-window " >
                                <Row>
                                        <Col xs="12">
                                                <div
                                                        className="special-font"
                                                        style={{
                                                                color:"white",
                                                                textAlign:"center",
                                                                fontSize:       "22px",
                                                                marginTop:      "5px"
                                                        }}
                                                >
                                                        Task Manager
                                                </div>
                                        </Col>

                                </Row>
                                <Row>
                                        <Col xs="12">
                                                <button
                                                        className="official-menu-buttonstyle"
                                                        onClick={() => handleToUpdate('A1')}>
                                                        HOME
                                                </button>
                                                <button className="official-menu-buttonstyle"
                                                        style={{float:"right", marginRight:"10px"}}
                                                        onClick={() => handleToUpdate('B1')}>
                                                        ABOUT
                                                </button>
                                        </Col>
                                </Row>
                            </Container>
                );
        }
}

export default MenuBar;

