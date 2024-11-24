import React from 'react';
import './ContactCard.css';

function ContactCard({ contact }) {
  return (
    <div className="card">
      <div className="card-header">
        <h2>{contact.name}</h2>
        <p className="username">@{contact.username}</p>
      </div>
      <div className="card-body">
        <p><strong>Email:</strong> {contact.email}</p>
        <p><strong>Phone:</strong> {contact.phone}</p>
        <p><strong>Website:</strong> {contact.website}</p>
        <p><strong>Company:</strong> {contact.company.name}</p>
        <p><strong>Address:</strong> {`${contact.address.suite}, ${contact.address.street}, ${contact.address.city}`}</p>
      </div>
    </div>
  );
}

export default ContactCard;
