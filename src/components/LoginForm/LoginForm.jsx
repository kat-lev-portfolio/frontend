import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styles from "./../LoginForm/LoginForm.module.css";
import Button from "../Button/Button";

function LoginForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");


  const handleLoginSuccess = () => {
    localStorage.setItem("isAuthenticated", "true");
    setSuccessMessage("Login successful! Redirecting in 4 seconds...");
    setError(""); 
    setTimeout(() => {
      navigate("/create");
    }, 4000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/api/login", formData);
      if (response.status === 200) {
        handleLoginSuccess();
      }
    } catch (err) {
      setError("Invalid username or password");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.LoginFormContainer}>
      <label>Enter your username:</label>
      <input
        type="text"
        placeholder="Username"
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        required
      />
      <label>Enter your password:</label>
      <input
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />
      <Button width="medium" type="submit" label="Send"/>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
}

export default LoginForm;