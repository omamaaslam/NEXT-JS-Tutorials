import './login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Login = () => {
    return (
        // <div className="login_card">
        //     <h4>Login with your cradentials</h4>
        //     <form id='loginForm'>
        //         <div>
        //             <label htmlFor="username">Username</label>
        //             <input type="text" placeholder='Enter Username' />
        //         </div>
        //         <div>
        //             <label htmlFor="email">Email</label>
        //             <input type="text" placeholder='Enter Email' />
        //         </div>
        //         <button>Login</button>
        //     </form>
        // </div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default Login;