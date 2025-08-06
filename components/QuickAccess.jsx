import { Dumbbell, DumbbellIcon } from 'lucide-react';
import React from 'react';

const QuickAccess = () => {
  return (
    <section className="py-12 px-4 text-center bg-gray-100">
      <h2 className="text-3xl font-bold mb-6">Gym Management Dashboard</h2>
      <p className="mb-6 text-gray-600">Real-time insights and management tools for your fitness center.</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mx-auto">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Total Members</h3>
          <p className="text-2xl font-bold text-orange-600 mt-2">524 <span className="text-sm text-green-500">+1% from last month</span></p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Active Today</h3>
          <p className="text-2xl font-bold text-orange-600 mt-2">89 <span className="text-sm text-green-500">+6% from last month</span></p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Classes Today</h3>
          <p className="text-2xl font-bold text-orange-600 mt-2">12</p>
        </div>
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-700">Revenue</h3>
          <p className="text-2xl font-bold text-orange-600 mt-2">$31,240 <span className="text-sm text-green-500">+3% from last month</span></p>
        </div>
      </div>

      <div><section className="py-12 px-4 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto">
        {/* Quick Actions Section */}
        <div className="p-6 bg-white rounded-lg shadow-md text-left">
            <div className="quickaccessheading flex content-center justify-center items-center m-4"> <Dumbbell className='w-5 h-5 text-orange-600 mr-2' /><h2 className="text-xl font-semibold">Quick Actions</h2></div>

          <div className="space-y-4 text-left flex-start flex flex-col">
            <button className="w-full bg-orange-100 text-black py-2 rounded-lg hover:bg-orange-500 transition-colors duration-300">
              Add Member
            </button>
            <button className="w-full bg-orange-100 text-black py-2 rounded-lg hover:bg-orange-500 transition-colors duration-300">
              Schedule Class
            </button>
            <button className="w-full bg-orange-100 text-black py-2 rounded-lg hover:bg-orange-500 transition-colors duration-300">
              View Membership
            </button>
          </div>
        </div>
        {/* Recent Activity Section */}
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
          <ul className="space-y-3 text-left text-gray-700">
            <li>John Doe joined the gym - 11:45 PM, Aug 06, 2025</li>
            <li>Yoga Class scheduled by Jane Smith - 10:30 AM, Aug 07, 2025</li>
            <li>Membership renewed for Mike Johnson - 9:00 PM, Aug 06, 2025</li>
          </ul>
        </div>
      </div>
    </section></div>
    </section>
    
  );
};

export default QuickAccess;