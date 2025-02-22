import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './profile.css';

export const ProfilePage = () => {
  const { id } = useParams();
  
  return (
    <div>
      <h1>Profile Page</h1>
      {id ? <p>Profile ID: {id}</p> : <p>No profile ID provided</p>}
      <Link to="/" className="profile-button">Return to Home</Link>
    </div>
  );
};
  const { id } = useParams(); // Get the profile ID from URL parameters
  
  return (
    <main className="profile-container">
      <h1>Profile Page</h1>
      <p>Viewing Profile ID: {id}</p>
    </main>
  );
};