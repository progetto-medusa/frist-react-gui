import React, { useState, useEffect } from "react";
import Navbar from "./NavbarComponent";
import Footer from "./FooterComponent";
import { useTheme } from "../contexts/ThemeContext";
import "../assets/styles/home/CampaignComponent.css";
import { jwtDecode } from "jwt-decode";


export default function CampaignComponent({ isLoggedIn }) {
  const API_BASE_URL = `${process.env.REACT_APP_API_CAMPAIGN_URL}/progetto-medusa/campaign/create`;
  const API_KEY = `${process.env.REACT_APP_X_APP_KEY}`;

  const { darkMode } = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    rule_version: "",
    insert_date: "",
    be_private: false,
    password: "",
    confirmPassword: "",
    application_id: ""
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check password match if private
    if (formData.be_private && formData.password !== formData.confirmPassword) {
      setPasswordError("Le password non coincidono.");
      return;
    }


    const token = localStorage.getItem('pm-react-app-token');
    console.log(token);
    let userUuid = "";
    try {
      const decoded = jwtDecode(token);
      userUuid = decoded["uuid"]; 
      console.log(decoded); // { userId: 123, email: "test@email.com" }
    } catch (error) {
      console.error("Token non valido", error);
    }

const application_id = process.env.REACT_APP_APPLICATION_ID;
    const finalData = {
      ...formData,
      application_id,
      creator_uuid: userUuid
    };
   
    
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: { 'Content-Type': 'application/json', 
        'X-APP-KEY': API_KEY 
      },
      body: JSON.stringify(finalData),
    })
      .then((res) => res.json())
      .then((data) => console.log("Success:", data))
      .catch((err) => console.error("Error:", err));
    
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
              name="rule_version"
              required
              value={formData.rule_version}
              onChange={handleChange}
              className="form-input"
            />
          </div>

          <div>
            <label className="font-medium">Private Campaign?</label>
            <input
              type="checkbox"
              name="be_private"
              checked={formData.be_private}
              onChange={handleChange}
              className="ml-2"
            />
          </div>

          {formData.be_private && (
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
      <Footer isLoggedIn={true}/>
    </div>
  );
}
