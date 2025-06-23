import Footer from "./FooterComponent";
import Navbar from "./NavbarComponent";
import React, { useState } from "react";
import { useTheme } from '../contexts/ThemeContext';
import '../assets/styles/CampaignComponent.css';

export default function CampaignComponent({ isLoggedIn }) {
const { darkMode } = useTheme();

     const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    ruleVersion: "",
    bePrivate: false,
    password: "",
    applicationId: "",
  });

 const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      applicationId: process.env.REACT_APP_X_APP_KEY,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Esempio invio POST (opzionale)
    /*
    fetch("/api/campaigns", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => console.log("Success:", data))
      .catch((err) => console.error("Error:", err));
    */
  };


    return (
      <div className={darkMode ? 'container dark' : 'container'}>
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
                className=""
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
                className=""
              />
            </div>

            <div className="">
              <label className="font-medium">Private Campaign?</label>
              <input
                type="checkbox"
                name="bePrivate"
                checked={formData.bePrivate}
                onChange={handleChange}
              />
              
            </div>

            {formData.bePrivate && (
              <div className="create-campaing-form-component">
                <label className="block font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className=""
                />
              </div>
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
                className=""
              ></textarea>
            </div>

            <button type="submit" className="">Submit</button>
        </form>
    </div>
    <Footer />
    </div>
  );
}