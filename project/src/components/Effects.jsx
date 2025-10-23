import React, { useState, useEffect } from "react";

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user data
    fetch("https://jsonplaceholder.typicode.com/users/1") // Example API
      .then((response) => response.json())
      .then((data) => setUser(data)) // Set user state
      .catch((error) => console.error("Error fetching user:", error));
  }, []); // Empty array -> runs only once on mount

  if (!user) return <p>Loading user...</p>;

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Username: {user.username}</p>
    </div>
  );
}

export default UserProfile;