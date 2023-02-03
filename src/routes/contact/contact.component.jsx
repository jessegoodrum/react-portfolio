import React, { useState } from 'react';
import './contact.styles.scss';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = event => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("https://formspree.io/f/myyakveo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        company: formData.company,
        message: formData.message
      })
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .then(alert(`Form submitted: \n\nName: ${formData.name} \nEmail: ${formData.email} \nCompany: ${formData.company} \nMessage: ${formData.message}`))
      .catch((error) => console.error(error));
  };
  

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input
            type="text"
            name="company"
            id="company"
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <button type="submit">Submit</button>
          <button type="reset" onClick={handleReset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}
