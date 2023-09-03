import React, { useEffect } from 'react';
import Particles from 'particles.js'; // Import particles.js library

const ParticlesComponent = () => {
  useEffect(() => {
    const particlesConfig = {
      // Your particles.js configuration
    };

    Particles.init('particles-js', particlesConfig); // Initialize particles.js
  }, []);

  return <div id="particles-js" />; // The div where particles animation will be rendered
};

export {ParticlesComponent};