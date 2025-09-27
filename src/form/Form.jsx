import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  // Input change handler
  const changeInp = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form submit handler
  const handlePrevent = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Name is required";
      localStorage.setItem
    }
    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    }
    if (formData.contact.trim() === "") {
      newErrors.contact = "Contact is required";
    }
    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

  
    localStorage.setItem("formData", JSON.stringify(formData));

  };

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handlePrevent}>
        {/* Name */}
        Name:{" "}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={changeInp}
        />
        <br />
        <small style={{ color: "red" }}>{errors.name}</small>
        <br />

        {/* Email */}
        Email:{" "}
        <input
          type="text"
          name="email"
          value={formData.email}
          onChange={changeInp}
        />
        <br />
        <small style={{ color: "red" }}>{errors.email}</small>
        <br />

        {/* Contact */}
        Contact:{" "}
        <input
          type="text"
          name="contact"
          value={formData.contact}
          onChange={changeInp}
        />
        <br />
        <small style={{ color: "red" }}>{errors.contact}</small>
        <br />

        {/* Password */}
        Password:{" "}
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={changeInp}
        />
        <br />
        <small style={{ color: "red" }}>{errors.password}</small>
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default App;
