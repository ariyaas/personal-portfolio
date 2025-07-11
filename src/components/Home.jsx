import React from 'react';
import profileImage from '../assets/profile.jpg.jpg'; // Add your image

const Home = () => {
  return (
   <section id="home" className="home-section">
  <div className="home-container">
    <div className="home-text">
      <h1>John Doe</h1>
      <h2>Full Stack Developer</h2>
      <p>
        Passionate developer with expertise in creating responsive and 
        user-friendly web applications. Dedicated to writing clean, 
        efficient code and solving complex problems.
      </p>
    </div>
    <div className="home-image">
      <img src={profileImage} alt="Profile" />
    </div>
  </div>
</section>
  );
};

export default Home;