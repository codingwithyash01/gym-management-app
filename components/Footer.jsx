import React from 'react';
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div>
        <p>FitPro Gym | Transform your fitness journey with state-of-the-art equipment, expert trainers, and supportive community. Your health is our priority.</p>
      </div>
      <div className="mt-4">
        <strong>Quick Links:</strong> Members | Classes | Trainers | Plans
      </div>
      <div className="mt-2">
        <strong>Contact Us:</strong> (123) 456-7890 | info@fitprogym.com
      </div>
      <p className="mt-2">&copy; 2024 FitPro Gym Management. All rights reserved. Built with React & TailwindCSS.</p>
    </footer>
  );
};

export default Footer;