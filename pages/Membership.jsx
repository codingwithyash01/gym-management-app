import React from 'react';
import { Zap, Star, Crown } from 'lucide-react';

const Membership = () => {
  return (
    <section className="py-12 px-4 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-4">Choose Your Membership</h2>
      <p className="mb-6 text-gray-600">Select the perfect plan to achieve your fitness goals with our comprehensive packages</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto">
        <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <Zap className="text-gray-400 w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Basic</h3>
          <p className="text-gray-600 mb-2">Perfect for getting started</p>
          <p className="text-3xl font-bold text-orange-600 mb-4">$29/month</p>
          <ul className="text-left mb-4 text-gray-700">
            <li className="flex items-center mb-2"><span className="text-green-500 mr-2">✔</span> Access to gym equipment</li>
            <li className="flex items-center mb-2"><span className="text-green-500 mr-2">✔</span> Basic fitness assessment</li>
            <li className="flex items-center mb-2"><span className="text-green-500 mr-2">✔</span> Locker room access</li>
            <li className="flex items-center mb-2"><span className="text-green-500 mr-2">✔</span> 24/7 gym access</li>
            <li className="flex items-center mb-2"><span className="text-green-500 mr-2">✔</span> 1 guest pass per month</li>
          </ul>
          <button className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300">Choose Basic</button>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg border border-orange-200 hover:shadow-xl transition-shadow duration-300 relative">
          <div className="absolute top-4 right-4 bg-orange-100 text-orange-600 px-2 py-1 rounded-full text-sm">Most Popular</div>
          <div className="flex justify-center mb-4">
            <Star className="text-yellow-400 w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Premium</h3>
          <p className="text-gray-600 mb-2">Most popular choice</p>
          <p className="text-3xl font-bold text-orange-600 mb-4">$59/month</p>
          <ul className="text-left mb-4 text-gray-700">
            <li className="flex items-center mb-2"><span className="text-green-500 mr-2">✔</span> All Basic features</li>
            <li className="flex items-center mb-2"><span className="text-green-500 mr-2">✔</span> Group fitness classes</li>
            <li className="flex items-center mb-2"><span className="text-green-500 mr-2">✔</span> Personal trainer consultation</li>
            <li className="flex items-center mb-2"><span className="text-green-500 mr-2">✔</span> Nutrition guidance</li>
            <li className="flex items-center mb-2"><span className="text-green-500 mr-2">✔</span> Sauna and steam room</li>
            <li className="flex items-center mb-2"><span className="text-green-500 mr-2">✔</span> 5 guest passes per month</li>
            <li className="flex items-center mb-2"><span className="text-green-500 mr-2">✔</span> Priority booking</li>
          </ul>
          <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-500 transition-colors duration-300">Choose Premium</button>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
          <div className="flex justify-center mb-4">
            <Crown className="text-gray-400 w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2">VIP</h3>
          <p className="text-gray-600 mb-2">The ultimate fitness experience</p>
          <p className="text-3xl font-bold text-orange-600 mb-4">$99/month</p>
          <ul className="text-left mb-4 text-gray-700">
            <li className="flex items-center mb-2"><span className="text-green-500 mr-2">✔</span> All Premium features</li>
            <li className="flex items-center mb-2"><span className="text-green-500 mr-2">✔</span> Unlimited personal training</li>
            <li className="flex items-center mb-2"><span className="text-green-500 mr-2">✔</span> Massage therapy sessions</li>
            <li className="flex items-center mb-2"><span className="text-green-500 mr-2">✔</span> Private training area</li>
            <li className="flex items-center mb-2"><span className="text-green-500 mr-2">✔</span> Unlimited guest passes</li>
            <li className="flex items-center mb-2"><span className="text-green-500 mr-2">✔</span> Concierge service</li>
            <li className="flex items-center mb-2"><span className="text-green-500 mr-2">✔</span> Custom meal plans</li>
          </ul>
          <button className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors duration-300">Choose VIP</button>
        </div>
      </div>
      <div className="mt-8 text-gray-600">
        <h3 className="text-lg font-semibold">Have Questions?</h3>
        <p className="mb-2">Our team is here to help you choose the right membership plan</p>
        <button className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition-colors duration-300">Contact Us</button>
      </div>
    </section>
  );
};

export default Membership;