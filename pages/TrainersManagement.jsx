import React from 'react';

const TrainersManagement = () => {
  const trainers = [
    { id: 1, name: 'Jane Smith', email: 'jane.smith@example.com', phone: '+1-555-0102', certifications: 'Yoga, Pilates', availability: 'Mon-Fri, 6 AM - 8 PM', image: 'https://via.placeholder.com/150' },
    { id: 2, name: 'Mike Johnson', email: 'mike.j@example.com', phone: '+1-555-0103', certifications: 'Cardio, Strength', availability: 'Tue-Sat, 5 PM - 9 PM', image: 'https://via.placeholder.com/150' },
    { id: 3, name: 'Sarah Williams', email: 'sarah.w@example.com', phone: '+1-555-0104', certifications: 'Zumba, HIIT', availability: 'Mon-Wed, 7 AM - 6 PM', image: 'https://via.placeholder.com/150' },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end mb-6">
          <button className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition-colors duration-300">
            Add Trainer
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map(trainer => (
            <div key={trainer.id} className="bg-white rounded-lg shadow-md p-4">
              <img src={trainer.image} alt={trainer.name} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{trainer.name}</h3>
                <p className="text-gray-600 mb-1">Email: {trainer.email}</p>
                <p className="text-gray-600 mb-1">Phone: {trainer.phone}</p>
                <p className="text-gray-600 mb-1">Certifications: {trainer.certifications}</p>
                <p className="text-gray-600 font-medium">Availability: {trainer.availability}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersManagement;