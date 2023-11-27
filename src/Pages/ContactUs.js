import Header from "../Component/Layout/Header/Header";
import Footer from "../Component/Layout/Footer/Footer";
import CartProvider from "../Store/CartProvider";
import HeaderCard from "../Component/UI/Card";
import { Col, Form, Button, Container,Row } from "react-bootstrap";
import contact from "../Assets/contact.jpg";

function Contact() {

 


  return (
    <CartProvider>
      <Header />
      <HeaderCard>        
        <Col md={5}>
          <img
            src={contact}
            alt="contact png"
            className="px-3 py-2"
            style={{ width: "100%" }}
          />
        </Col>
        
        <Col md={7}>
        <Container>
            <Row className="d-flex justify-content-center my-3">
        <Col md={12} className="text-center mb-2">
          <h1>Contact us</h1>
        </Col>        
        <Col md={6} className="border rounded-3 border-primary p-3">
          <Form className="my-2 py-1">
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter Name"  />              
            </Form.Group> 
            <Form.Group className="mb-3" controlId="contact">
              <Form.Label>Contact No:</Form.Label>
              <Form.Control type="number" placeholder="Enter Contact number" />  
              <Form.Text className="text-muted">
                We'll never share your contact number with anyone else.
              </Form.Text>            
            </Form.Group> 
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address:</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>           
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          </Col>
          </Row>
          </Container>
        </Col>
      </HeaderCard>
      <Footer />
    </CartProvider>
  );
}

export default Contact;
