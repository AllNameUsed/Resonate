import React, { useEffect, useState } from 'react';
import ContactCard from './ContactCard';
import './App.css';

function App() {
  // State to hold contacts data
  const [contacts, setContacts] = useState([]);

  // Fetch contacts from the API when the component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error('Error fetching contacts:', error));
  }, []);

  return (
    <div className="app-container">
      <h1 className="app-title">My Contacts</h1>
      <div className="contacts-grid">
        {contacts.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </div>
    </div>
  );
}

export default App;
