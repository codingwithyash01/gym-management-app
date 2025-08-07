import React from 'react';
import BackgroundImage from '../assets/images/hero.jpg';

const MembersPage = () => {
  const members = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', phone: '+1-555-0101', address: '123 Fitness Lane', membership: 'Premium', image: BackgroundImage },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '+1-555-0102', address: '456 Health St', membership: 'Basic', image: BackgroundImage },
    { id: 3, name: 'Mike Johnson', email: 'mike.j@example.com', phone: '+1-555-0103', address: '789 Gym Ave', membership: 'VIP', image: BackgroundImage },
    { id: 4, name: 'Sarah Williams', email: 'sarah.w@example.com', phone: '+1-555-0104', address: '101 Fit Rd', membership: 'Premium', image: BackgroundImage },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50 min-h-screen">
      <div className= "mx-auto">
        <div className="flex justify-end mb-6">
          <button className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition-colors duration-300">
            Add Member
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {members.map((member) => (
            <div key={member.id} className="bg-white rounded-lg shadow-md p-4">
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-600 mb-1">Email: {member.email}</p>
                <p className="text-gray-600 mb-1">Phone: {member.phone}</p>
                <p className="text-gray-600 mb-1">Address: {member.address}</p>
                <p className="text-gray-600 font-medium">Membership: {member.membership}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersPage;