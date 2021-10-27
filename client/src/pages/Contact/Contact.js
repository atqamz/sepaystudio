import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";

import ServiceButton from "./serviceButton/ServiceButton.com";
import Footer from "../../components/footerV1/Footer.com";

export default function Contact() {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    description: "",
    category: "",
  });

  function onChange(event) {
    const { name, value } = event.target;

    setContact({ ...contact, [name]: value });
  }

  function onSubmit(event) {
    event.preventDefault();
    const newContact = {
      name: contact.name,
      email: contact.email,
      description: contact.description,
      category: contact.category,
    };

    axios.post("/api/contacts", newContact).then((res) => console.log(res.data));
    window.location = "https://wa.me/+6281232063424";
  }

  return (
    <div className='contact'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 contact-form py-5'>
            <h1>Let's Create New Joy</h1>
            <h6>Services</h6>

            <form onSubmit={onSubmit}>
              <ServiceButton
                value='gamification'
                for='category-button-1'
                label='Gamification'
                onChange={onChange}
              />
              <ServiceButton
                value='ar'
                for='category-button-2'
                label='Augmented Reality'
                onChange={onChange}
              />
              <ServiceButton
                value='vr'
                for='category-button-3'
                label='Virtual Reality'
                onChange={onChange}
              />
              <ServiceButton
                value='game'
                for='category-button-4'
                label='Game'
                onChange={onChange}
              />

              <div className='row p-2'>
                <input
                  className='form-input'
                  type='text'
                  name='name'
                  placeholder='Name'
                  onChange={onChange}
                  value={contact.name}
                />
                <input
                  className='form-input'
                  type='text'
                  name='email'
                  placeholder='Email'
                  onChange={onChange}
                  value={contact.email}
                />
                <input
                  className='form-input col-12'
                  type='text'
                  name='description'
                  placeholder='Project Description'
                  onChange={onChange}
                  value={contact.description}
                />
              </div>
              <button type='submit' className='btn btn-primary mt-3'>
                Send
              </button>
            </form>
          </div>

          <div className='col-md-6 p-5'>
            <img className='img-fluid w-100' src='/assets/contact_header.svg' alt='' />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
