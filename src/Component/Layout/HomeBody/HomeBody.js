import React, { Fragment } from 'react'
import HeaderCard from '../../UI/Card'
import { useHistory } from 'react-router-dom';
import { Col,Container,Row } from 'react-bootstrap'
import CartButton from '../../UI/Button'
import hc1 from '../../../Assets/hc1.jpg'
import hc2 from '../../../Assets/hc2.jpg'
import hc3 from '../../../Assets/hc3.jpg'


function HomeBody() {
    const history = useHistory(); 
 
  const navigateToStore = () => {
    history.push('/store'); 
  };

  return (
    <Fragment>
        <HeaderCard>
            <Col md={5}>
                <HeaderCard className='py-5' style={{ marginTop:"90px"}}>
                    <Col md={12} className='mt-5 ms-5 pt-5 ps-4 mb-3 text-primary' style={{ fontFamily: "'Playfair Display', serif"}}><h1>Shop our latest clothing,accessories & more!</h1></Col>
                    <Col md={12} className='ms-5 ps-4 mb-3'><p>Explore wht our stores has to offer! We have a wide range of different accessories and merchandise available for purchase</p></Col>
                    <Col md={12} className='ms-5 ps-4 mb-3'>
                    <CartButton type='Button' onClick={navigateToStore}>Shop Now!</CartButton>
                    </Col>                    
                </HeaderCard>                
            </Col>
            <Col md={7}>
            <Container>
                    <Row className='justify-content-center'>            
                <Col md={10} className=' '>
                <img
            src={hc3}
            alt="gir png"
            className="py-2 rounded-5"
            style={{ width: "100%" , height:"350px" }}
          />
                </Col>
                </Row>
                <Row className='justify-content-center'>
                <Col md={5} className=''>
                <img
            src={hc2}
            alt="gir png"
            className="py-2  rounded-4"
            style={{ width: "100%" , height:"350px" }}
          />
                </Col>
                <Col md={5} >
                <img
            src={hc1}
            alt="gir png"
            className="py-2 rounded-4"
            style={{ width: "100%" , height:"350px" }}
          />
                </Col>
                </Row>
            </Container>
            </Col>
        </HeaderCard>
    </Fragment>
  )
}

export default HomeBody