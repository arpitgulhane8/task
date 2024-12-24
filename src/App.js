import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/?page=1&results=1&seed=abc");
        setUser(response.data.results[0]);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  if (!user) return <div>Loading...</div>;

  return (
    <div className="profile-card">
      <div className="profile-image">
        <img src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} />
      </div>
      <div className="profile-details">
        <h2>{`${user.name.title} ${user.name.first} ${user.name.last}`}</h2>
        <p><strong>Gender:</strong> {user.gender}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
      </div>
    </div>
  );
};

export default App;
