import React from 'react';
import backgroundImage from '../assets/images/hero.jpg'; 
import { Users, Calendar } from 'lucide-react';
const HeroSection = () => {
  return (
    <header
      className="bg-black-600 text-white text-left py-12 px-10 bg-cover bg-center relative"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-black opacity-90"></div>
      <div className="relative z-10 py-24">
        <h1 className="text-5xl font-bold mb-4">Transform Your Fitness Journey</h1>
        <p className="mt-2 mb-6 text-lg">A state-of-the-art equipment, expert trainers, and a community that pushes you to achieve your fitness goals.</p>
        <div className="mt-4 flex justify-start space-x-8 text-xl">
          <div><strong>500+</strong> Active Members</div>
          <div><strong>15+</strong> Expert Trainers</div>
          <div><strong>24/7</strong> Open Access</div>
        </div>
        <div className="herobuttons mt-8 flex justify-start space-x-4">
             
            <a className='bg-orange-600 flex items-center space-x-2 text-white py-2 px-5 rounded-lg hover:bg-orange-500 transition-colors duration-300'>  <Users className="w-5 h-5 text-white-600" /><span>View Members</span></a>
            <a className='bg-orange-600 flex items-center space-x-2 text-white py-2 px-5 rounded-lg hover:bg-orange-500 transition-colors duration-300'>  <Users className="w-5 h-5 text-white-600" /><span>View Members</span></a>
                </div>
      </div>
    </header>  );
};

export default HeroSection;