import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './profile.css';

export const ProfilePage = () => {
  const params = useParams();
  
  return (
    <div>
      <h1>Profile Page {params.id}</h1>
      {params.id ? <p>Profile ID: {params.id}</p> : <p>No profile ID provided</p>}
      <Link to="/" className="profile-button">Return to Home</Link>
    </div>
  );
};