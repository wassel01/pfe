import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { userSignUp } from "../redux/slice/user";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
const SingUp = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [adresse, setAdresse] = useState("");
  const [telephone, setTelephone] = useState("");
  
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      email,
      password,
      fullName,
      adresse,
      telephone,
    };
    dispatch(userSignUp(newUser));
  };
  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
         
          <Form.Label>Email address</Form.Label>
        <Form.Control
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
           <Form.Label>Password</Form.Label>
        <Form.Control
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
         <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
         <Form.Label>Adress</Form.Label>
        <Form.Control
          type="text"
          value={adresse}
          onChange={(e) => setAdresse(e.target.value)}
        />
         <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="text"
          value={telephone}
          onChange={(e) => setTelephone(e.target.value)}
        />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      
      <p>do you have a account ?</p>
      <Link to="/login">
        <p>go to login</p>
      </Link>
    </div>
  );
};

export default SingUp;
