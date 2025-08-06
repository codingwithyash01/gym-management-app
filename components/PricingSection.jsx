import React from 'react';
const PricingSection = () => {
  return (
    <section className="py-12 px-4 bg-gray-100 text-center">
      <h2 className="text-2xl font-bold mb-6">Choose Your Membership Plan</h2>
      <p className="mb-6">Flexible plans designed to fit your lifestyle and fitness goals.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-xl font-semibold">Basic</h3>
          <p className="text-2xl font-bold text-red-600">$29</p>
          <ul className="mt-4 text-left">
            <li>Access to gym equipment</li>
            <li>Locker room access</li>
            <li>Mobile app access</li>
            <li>24/7 gym access Basic</li>
          </ul>
          <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded">Choose Basic</button>
        </div>
        <div className="p-4 bg-white rounded shadow border-2 border-red-600">
          <h3 className="text-xl font-semibold">Premium <span className="text-sm text-red-600">(Most Popular)</span></h3>
          <p className="text-2xl font-bold text-red-600">$59</p>
          <ul className="mt-4 text-left">
            <li>Everything in Basic</li>
            <li>Unlimited trainer classes</li>
            <li>Personal trainer consultation</li>
            <li>Guest passes (2 months)</li>
            <li>24/7 gym access Premium</li>
          </ul>
          <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded">Choose Premium</button>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-xl font-semibold">Elite</h3>
          <p className="text-2xl font-bold text-red-600">$99</p>
          <ul className="mt-4 text-left">
            <li>Everything in Premium</li>
            <li>Unlimited personal training</li>
            <li>Massage therapy sessions</li>
            <li>VIP locker rooms</li>
            <li>Unlimited guest passes</li>
            <li>Priority booking classes</li>
          </ul>
          <button className="mt-4 bg-red-600 text-white py-2 px-4 rounded">Choose Elite</button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;