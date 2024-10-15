import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa";

const LoginForm = () => {
  return (
    <Form className="login-form rounded p-4 my-3">
      <h5 className="text-center">Login Your Account</h5>
      <Form.Group className="my-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className="py-3" />
        <Form.Text className="text-muted">
          <small>We'll never share your email with anyone else.</small>
        </Form.Text>
      </Form.Group>

      <Form.Group className="my-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className="py-3" />
      </Form.Group>
      <Form.Group
        className="mb-3 d-flex align-items-center justify-content-between"
        controlId="formBasicCheckbox"
      >
        <Form.Check type="checkbox" label="Remember Me" />
        <a href="#" className="form-link">Forget Password?</a>
      </Form.Group>
      <Button
        className="text-center w-100 fs-5 py-2 mb-3"
        type="submit"
        id="sign-in-btn"
      >
        Sign In
      </Button>
      <p className="text-center">Or login with</p>
      <div className="d-flex align-items-center justify-content-center gap-5 text-center mb-3">
        <Button
          type="submit"
          id="custom-btn"
          className="d-flex align-items-center px-5 py-2"
        >
          <FaFacebookF fontSize={25} />
          <span className="ms-3">Facebook</span>
        </Button>
        <Button
          type="submit"
          id="custom-btn"
          className="d-flex align-items-center px-5 py-2"
        >
          <FaGoogle fontSize={25} />
          <span className="ms-3">Google</span>
        </Button>
      </div>
      <p className="text-center mb-0">
        You Don't have any account?<a href="#">Sign Up</a>
      </p>
    </Form>
  );
};

export default LoginForm;
