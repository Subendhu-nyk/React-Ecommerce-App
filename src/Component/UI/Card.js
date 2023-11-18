import React from "react";
import { Container, Row } from "react-bootstrap";

const HeaderCard = (props) => {
  return (
    <Container fluid className={props.className}>
      <Container >
        <Row>
        {props.children}
        </Row>
      </Container>
    </Container>
  )
}

export default HeaderCard