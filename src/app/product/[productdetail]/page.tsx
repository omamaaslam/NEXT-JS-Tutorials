"use client"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Productdetail = (params?: any) => {
    
    return (
        <Container>
            <Row className='mt-4 mb-4 py-4'>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>
                                <h4>Product Detail Page</h4>
                            </Card.Title>
                            <span className='text-primary'>#Id {params.params.productdetail}</span>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
export default Productdetail;