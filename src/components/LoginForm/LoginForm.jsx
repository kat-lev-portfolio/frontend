import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import axios from "axios";
import styles from "./../LoginForm/LoginForm.module.css";
import Button from "../Button/Button";

function LoginForm() {
    const { t, i18n } = useTranslation();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ username: "", password: "" });
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");


  const handleLoginSuccess = () => {
    localStorage.setItem("isAuthenticated", "true");
    setSuccessMessage(t('login.successfulLogin'));
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
      setError(t('login.unsuccessfulLogin'));
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.LoginFormContainer}>
      <label>{t('login.usernameLabel')}</label>
      <input
        type="text"
        placeholder={t('login.usernamePlaceholder')}
        value={formData.username}
        onChange={(e) => setFormData({ ...formData, username: e.target.value })}
        required
      />
      <label>{t('login.passwordLabel')}</label>
      <input
        type="password"
        placeholder={t('login.passwordPlaceholder')}
        value={formData.password}
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        required
      />
      <Button width="large" type="submit" label={t('button.send')}/>
      {error && <p>{error}</p>}
      {successMessage && <p>{successMessage}</p>}
    </form>
  );
}

export default LoginForm;