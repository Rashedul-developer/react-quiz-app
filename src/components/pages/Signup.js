import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

import { useAuth } from "../../Providers/AuthProvider";

export default function Signup() {
  /*............. all input state............*/
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  /*.............handle submit function...................*/
  async function handleSumit(params) {
    params.preventDefault();

    /*......validate......*/
    if (password !== confirmPassword) {
      return setError("Password does not match");
    }

    try {
      setLoading(true);
      setError("");
      await register(name, email, password);
      navigate("/");
    } catch (error) {
      return setError(error);
    }
  }

  return (
    <div className="column">
      <Illustration />
      <Form className="signup" method="post" action="" onSubmit={handleSumit}>
        <TextInput
          type="text"
          value={name}
          required
          placeholder="Enter name"
          onChange={(e) => setName(e.target.value)}
          icon="person"
        />
        <TextInput
          type="email"
          placeholder="Enter email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
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
        <TextInput
          type="password"
          placeholder="Confirm password"
          value={confirmPassword}
          required
          onChange={(e) => setConfirmPassword(e.target.value)}
          icon="lock_clock"
        />
        <Checkbox
          value={agree}
          required
          onChange={(e) => setAgree(e.target.value)}
          text="I agree to the Terms &amp; Conditions"
        />

        <Button type="submit" disabled={loading}>
          <span>Submit Now</span>
        </Button>

        {error && <p className="error">{error}</p>}

        <div className="info">
          Already have an account? <Link to="/login">Login</Link> instead.
        </div>
      </Form>
    </div>
  );
}
