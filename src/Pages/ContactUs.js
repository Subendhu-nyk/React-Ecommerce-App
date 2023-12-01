import Header from "../Component/Layout/Header/Header";
import Footer from "../Component/Layout/Footer/Footer";
import CartProvider from "../Store/CartProvider";
import HeaderCard from "../Component/UI/Card";
import { Col, Form, Button, Container,Row } from "react-bootstrap";
import contactImg from "../Assets/contact.jpg";
import { useState } from "react";

function Contact(props) {
  const [name,setName]=useState('')
  const [contact,setContact]=useState('')
  const [email,setEmail]=useState('')

const nameHandler=(event)=>{
  const nameRef=event.target.value
  setName(nameRef)
  
}

const contactHandler=(event)=>{
  const contactRef=event.target.value
  setContact(contactRef)
}

const emailHandler=(event)=>{
  const emailRef=event.target.value
  setEmail(emailRef)
}

const onSubmitHandler =async(event)=>{
  event.preventDefault()
 const contactDetails={
    name:name,
    contact:contact,
    email:email
  }
  console.log(contactDetails)
  const response=await fetch('https://react-http-6e598-default-rtdb.firebaseio.com/contactDetails.json',{
      method:'POST',
      body:JSON.stringify(contactDetails),
      headers:{
        'Content-Type':'application/json'
      }
    })
    const data=await response.json()
    console.log(data)
}


  return (
    <CartProvider>
      <Header />
      <HeaderCard>        
        <Col md={5}>
          <img
            src={contactImg}
            alt="contact png"
            className="mx-auto px-3 py-2"
            style={{ width: "100%" }}
          />
        </Col>
        
        <Col md={7}>
        <Container>
            <Row className="d-flex justify-content-center my-3">
        <Col md={12} className="text-center mb-2" style={{ fontFamily: "'Playfair Display', serif"}}>
          <h1>Contact us</h1>
        </Col>        
        <Col md={6} className="border rounded-3 border-4 border-primary p-3">
          <Form className="my-2 py-1" onSubmit={onSubmitHandler}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Name:</Form.Label>
              <Form.Control type="text" placeholder="Enter Name" onChange={nameHandler} />              
            </Form.Group> 
            <Form.Group className="mb-3" controlId="contact">
              <Form.Label>Contact No:</Form.Label>
              <Form.Control type="number" placeholder="Enter Contact number" onChange={contactHandler} />  
              <Form.Text className="text-muted">
                We'll never share your contact number with anyone else.
              </Form.Text>            
            </Form.Group> 
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address:</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={emailHandler}/>
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
