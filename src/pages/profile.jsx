import React from 'react';
import { useParams, Link, NavLink, Outlet } from 'react-router-dom';
import './profile.css';

const userProfiles = [
  { 
    id: 1, 
    name: "Captain Fossil Beard", 
    description: "A swashbuckling paleontologist who trades their pickaxe for a cutlass, but still meticulously labels every treasure map with proper geological periods."
  },
  { 
    id: 2, 
    name: "Dr. Bones Silverscale", 
    description: "Specializes in marine reptile fossils, has a peg leg made from a fossilized T-Rex bone, and never goes diving without their lucky prehistoric shark tooth."
  },
  { 
    id: 3, 
    name: "First Mate Pterodactyl Pete", 
    description: "Claims their parrot is a direct descendant of pterodactyls. Has a hook hand that doubles as a fossil brush."
  },
  { 
    id: 4, 
    name: "Professor Plunder", 
    description: "Only raids dig sites with proper permits, but insists on wearing an eye patch and calling their research vessel 'The Jurassic Pearl'."
  },
  { 
    id: 5, 
    name: "Lady Raptor Regina", 
    description: "A refined scholar who delivers lectures on paleontology while standing on her ship's plank, makes students walk it if they misidentify fossils."
  }
];

export const ProfilePage = () => {
  const params = useParams();
  
  return (
    <div>
      <h1>Profiles</h1>
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

      {params.id && (
        <div>
          <h2>{userProfiles[params.id - 1].name}</h2>
          <p>Profile ID: {params.id}</p>
          <p className="profile-description">{userProfiles[params.id - 1].description}</p>
        </div>
      )}

      <Link to="/" className="profile-button">Return to Home</Link>
    </div>
  );
};