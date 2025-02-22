import React from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';
import { useParams } from 'react-router-dom';

export const ProfilePage = () => {
  const { id } = useParams();

  return (
    <div>
      <h1>Profile Page</h1>
      <p>Profile ID: {id}</p>
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