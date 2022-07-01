import { Link } from "react-router-dom";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Signup() {
  return (
    <div className="column">
      <Illustration />
      <Form className="signup" method="post" action="">
        <TextInput type="text" placeholder="Enter name" icon="person" />
        <TextInput
          type="email"
          placeholder="Enter email"
          icon="alternate_email"
        />
        <TextInput type="password" placeholder="Enter password" icon="lock" />
        <TextInput
          type="password"
          placeholder="Confirm password"
          icon="lock_clock"
        />
        <Checkbox text="I agree to the Terms &amp; Conditions" />
        <Button>
          <span>Submit Now</span>
        </Button>
        <div className="info">
          Already have an account? <Link to="/login">Login</Link> instead.
        </div>
      </Form>
    </div>
  );
}
