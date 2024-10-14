import { Container, Form } from "react-bootstrap";

const SignupForm = () => {
  return (
    <>
      <Container>
        <h5>Create your Techmart Account</h5>
        <Container className="p-2">
          <Form.Control type="email" placeholder="Email" />
          <Form.Control type="password" placeholder="Password" />
        </Container>
      </Container>
    </>
  );
};

export default SignupForm;
