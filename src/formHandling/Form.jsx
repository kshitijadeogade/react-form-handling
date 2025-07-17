import React, { useState } from 'react';
import "./Form.css";

const Form = () => {
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", inputs);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          onChange={handleChange}
          value={inputs.name}
          type="text"
          placeholder="Name"
        />
        <input
          name="email"
          onChange={handleChange}
          value={inputs.email}
          type="email"
          placeholder="Email"
        />
        <input
          name="password"
          onChange={handleChange}
          value={inputs.password}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Form;
