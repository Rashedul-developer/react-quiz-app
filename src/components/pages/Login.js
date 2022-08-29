import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Providers/AuthProvider";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

export default function Login() {
  /*............login state.........*/
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  const { login } = useAuth();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/");
    } catch (error) {
      return setError(error);
    }
  }

  return (
    <div className="column">
      <Illustration />
      <Form className="login" method="post" action="" onSubmit={handleSubmit}>
        <TextInput
          type="email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
          icon="alternate_email"
        />
        <TextInput
          type="password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
          icon="lock"
        />
        <Checkbox
          disabled={loading}
          text="I agree to the Terms &amp; Conditions"
        />
        <Button type="submit">
          <span>Login Now</span>
        </Button>
        {error && <p className="error">{error}</p>}
        <div className="info">
          Don't have an account? <Link to="/signup">Signup</Link> instead.
        </div>
      </Form>
    </div>
  );
}
