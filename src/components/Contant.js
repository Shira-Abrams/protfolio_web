import React from 'react';
import '../styles/Contact.scss';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Information</h2>
      <div className="contact-details">
        <pre className="json-format">
{`{
  "name": "Shira Abrams",
  "email": "`}<a href="mailto:sh3000444@gmail.com" className="mail-link">sh3000444@gmail.com</a>{`",
  "phone": "0583228046",
  "github": "`}<a href="https://github.com/Shira-Abrams/" target="_blank" rel="noopener noreferrer" className="mail-link">https://github.com/Shira-Abrams/</a>{`"
}`}
        </pre>
      </div>
    </div>
    
  );
};

export default Contact;
