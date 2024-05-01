import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/slice/user";
import { Link, Navigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const SignIn = () => {
  const { user, token, loading } = useSelector((state) => state);
  // console.log(token)
  const [email, setEmail] = useState("email");
  const [password, setPassword] = useState("12345");

  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(userLogin(user));
  };
  return (
    <div className="App">
      {loading ? (
        <h1>Loading ...</h1>
      ) : localStorage.getItem("token") ? (
        <Navigate to={`/user/${user.id}`} />
      ) : (
        <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      )}

      <p>you don't have a acount ?</p>
      <Link to="/">
        <p>go to SignUp</p>
      </Link>
    </div>
  );
};

export default SignIn;
