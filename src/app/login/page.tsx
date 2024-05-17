import './login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const Login = () => {
    return (
        <Container>
            <Row className='mt-5 mb-5'>
                <Col className='col-lg-4 offset-lg-7 col-md-6 offset-md-5 col-12'>
                    <Card className='p-3'>
                        <Form>
                            <div className="mb-3">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </div>

                            <div className="mb-3">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </div>
                            <div className="mb-3">
                                <Form.Check type="checkbox" label="Check me out" />
                            </div>
                            <Button type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default Login;