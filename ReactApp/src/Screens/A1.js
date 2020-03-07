/***************************************************
* A1.js: DICE SCREEN
**************************************************/
import React from "react";
import TaskManager from "../components/TaskManager";
import "../css/site.css"


import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";


class A1 extends React.Component {

  render() {
      return (
              <Container className="official-background-color official-body">
              <Row>
               <Col>
                      <TaskManager />
               </Col>
              </Row>
              </Container>
      );
  }
}

export default A1;
