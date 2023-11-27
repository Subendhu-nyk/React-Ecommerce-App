import React from "react";
import { Container, Row } from "react-bootstrap";

const HeaderCard = (props) => {
  return (
    <Container fluid className={props.className}>     
        <Row>
        {props.children}
        </Row>    
    </Container>
  )
}

export default HeaderCard