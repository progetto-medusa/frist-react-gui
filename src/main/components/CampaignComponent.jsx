import React, { useState } from "react";
import Navbar from "./NavbarComponent";
import Footer from "./FooterComponent";
import { useTheme } from "../contexts/ThemeContext";
import "../assets/styles/home/CampaignComponent.css";

export default function CampaignComponent({ isLoggedIn }) {
  const { darkMode } = useTheme();

  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    ruleVersion: "",
    bePrivate: false,
    password: "",
    confirmPassword: "",
    applicationId: "",
  });

  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Reset error on typing
    if (name === "password" || name === "confirmPassword") {
      setPasswordError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check password match if private
    if (formData.bePrivate && formData.password !== formData.confirmPassword) {
      setPasswordError("Le password non coincidono.");
      return;
    }

    const finalData = {
      ...formData,
      applicationId: process.env.REACT_APP_X_APP_KEY,
    };

    console.log("Form submitted:", finalData);

    // Optional fetch POST request
    /*
    fetch("/api/campaigns", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalData),
    })
      .then((res) => res.json())
      .then((data) => console.log("Success:", data))
      .catch((err) => console.error("Error:", err));
    */
  };

  return (
    <div className={darkMode ? "container dark" : "container"}>
      <Navbar isLoggedIn={isLoggedIn} />
      <div className="create-campaign-container">
        <form onSubmit={handleSubmit} className="create-campaign-form">
          <h2>Crea la Campagna</h2>

          <input type="hidden" name="id" value={formData.id} />

          <div className="create-campaing-form-component">
            <label className="block font-medium">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div className="create-campaing-form-component">
            <label className="block font-medium">Rule Version</label>
            <input
              type="text"
              name="ruleVersion"
              required
              value={formData.ruleVersion}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div>
            <label className="font-medium">Private Campaign?</label>
            <input
              type="checkbox"
              name="bePrivate"
              checked={formData.bePrivate}
              onChange={handleChange}
              className="ml-2"
            />
          </div>

          {formData.bePrivate && (
            <>
              <div className="create-campaing-form-component">
                <label className="block font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="create-campaing-form-component">
                <label className="block font-medium">Conferma Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              {passwordError && (
                <p className="text-red-600 text-sm">{passwordError}</p>
              )}
            </>
          )}

          <div className="create-campaing-form-component">
            <label className="block font-medium">Description</label>
            <textarea
              name="description"
              required
              minLength={1}
              maxLength={500}
              value={formData.description}
              onChange={handleChange}
              className="form-textarea"
            ></textarea>
          </div>

          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>
      <Footer/>
    </div>
  );
}
