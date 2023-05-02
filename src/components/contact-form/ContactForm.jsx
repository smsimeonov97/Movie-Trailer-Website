import React, { useState } from "react";
import "./contact-form.scss";
import Button from "../button/Button";

function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handleMessageChange(event) {
    setMessage(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length === 0) {
      alert("Form submitted successfully");
      // You can add code here to submit the form to a server or API
    } else {
      setErrors(errors);
    }
  }

  function validate() {
    const errors = {};
    if (!name.trim()) {
      errors.name = "Please enter your name";
    }
    if (!email.trim()) {
      errors.email = "Please enter your email";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email";
    }
    if (!message.trim()) {
      errors.message = "Please enter a message";
    }
    return errors;
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        placeholder="Enter your Name"
        id="name"
        name="name"
        value={name}
        onChange={handleNameChange}
      />
      {errors.name && <div className="error">{errors.name}</div>}
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        placeholder="Enter your Email"
        id="email"
        name="email"
        value={email}
        onChange={handleEmailChange}
      />
      {errors.email && <div className="error">{errors.email}</div>}
      <label htmlFor="message">Message:</label>
      <textarea
        placeholder="Write your Message"
        id="message"
        name="message"
        value={message}
        onChange={handleMessageChange}
      />
      {errors.message && <div className="error">{errors.message}</div>}
      <Button type="submit">Send</Button>
    </form>
  );
}

export default Form;
