import React from 'react';
import { useParams, Link, NavLink } from 'react-router-dom';
import './profile.css';

const userProfiles = [
  { id: 1, name: "Profile 1" },
  { id: 2, name: "Profile 2" },
  { id: 3, name: "Profile 3" },
  { id: 4, name: "Profile 4" },
  { id: 5, name: "Profile 5" }
];

export const ProfilePage = () => {
  const params = useParams();
  
  return (
    <div>
      <h1>Profile Page {params.id}</h1>
      {params.id ? <p>Profile ID: {params.id}</p> : <p>No profile ID provided</p>}
      
      <nav>
        {userProfiles.map(profile => (
          <NavLink
            key={profile.id}
            to={`/profile/${profile.id}`}
            className={({ isActive }) => 
              isActive ? "profile-link active" : "profile-link"
            }
          >
            {profile.name}
          </NavLink>
        ))}
      </nav>

      <Link to="/" className="profile-button">Return to Home</Link>
    </div>
  );
};