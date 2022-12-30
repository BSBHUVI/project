import React from 'react';
import './ContactPage.css';

function ContactPage() {
  return (
    <div className="contact-page" style={{ backgroundColor: '#E8F5E9', padding: '20px',marginTop:'2rem' }}>
      <h1 className="contact-header">Contact Us</h1>
      <p className="contact-description">
        If you have any questions or comments about our web application, please don't hesitate to contact us. You can reach us by email at <a target="_blank" rel='noreferrer' href="mailto:sce19cs090@sairamtap.edu.in?subject='heelo'&body='just hello'">sce19cs090@sairamtap.edu.in</a> or by phone at 555-555-5555.
      </p>
      <form className="contact-form">
        <label className="contact-label">
          Name:
          <input className="contact-input" type="text" name="name" />
        </label>
        <br />
        <label className="contact-label">
          Email:
          <input className="contact-input" type="email" name="email" />
        </label>
        <br />
        <label className="contact-label">
          Phone:
          <input className="contact-input" type="tel" name="phone" />
        </label>
        <br />
        <label className="contact-label">
          Message:
          <textarea className="contact-input" name="message" />
        </label>
        <br />
        <input className="contact-button" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ContactPage;
