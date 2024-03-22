import React from "react";
import { NavLink, Outlet } from "react-router-dom";
const profiles = [1, 2, 3, 4, 5];
const ProfilesPages = () => {
  return (
    <div>
      {profiles.map((profile) => (
        <NavLink key={profile} to={`/profiles/${profile}`}>
          Profile {profile}
        </NavLink>
      ))}
      <Outlet />
    </div>
  );
};

export default ProfilesPages;
