import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Login() {
  return (
    <div className="column">
      <Illustration />
      <Form className="login" method="post" action="">
        <TextInput
          type="email"
          placeholder="Enter email"
          icon="alternate_email"
        />
        <TextInput type="password" placeholder="Enter password" icon="lock" />
        <Checkbox text="I agree to the Terms &amp; Conditions" />
        <Button>Login Now</Button>
        <div className="info">
          Don't have an account? <a href="signup.html">Signup</a> instead.
        </div>
      </Form>
    </div>
  );
}
