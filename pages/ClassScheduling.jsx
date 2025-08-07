import React, { useState } from 'react';

const ClassScheduling = () => {
  const [filter, setFilter] = useState({ time: '', trainer: '', type: '' });
  const classes = [
    { id: 1, name: 'Yoga', time: '6:00 AM - 7:00 AM', trainer: 'Jane Smith', type: 'Yoga', capacity: 15 },
    { id: 2, name: 'Cardio', time: '5:00 PM - 6:00 PM', trainer: 'Mike Johnson', type: 'Cardio', capacity: 20 },
    { id: 3, name: 'Strength Training', time: '7:00 PM - 8:00 PM', trainer: 'Sarah Williams', type: 'Strength', capacity: 10 },
  ];

  const filteredClasses = classes.filter(cls =>
    (filter.time === '' || cls.time.includes(filter.time)) &&
    (filter.trainer === '' || cls.trainer.includes(filter.trainer)) &&
    (filter.type === '' || cls.type.includes(filter.type))
  );

  return (
    <section className="py-12 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between mb-6 items-center">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Filter by Time"
              value={filter.time}
              onChange={(e) => setFilter({ ...filter, time: e.target.value })}
              className="p-2 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Filter by Trainer"
              value={filter.trainer}
              onChange={(e) => setFilter({ ...filter, trainer: e.target.value })}
              className="p-2 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Filter by Type"
              value={filter.type}
              onChange={(e) => setFilter({ ...filter, type: e.target.value })}
              className="p-2 border rounded-lg"
            />
          </div>
          <button className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-500 transition-colors duration-300">
            Add Class
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClasses.map(cls => (
            <div key={cls.id} className="bg-white rounded-lg shadow-md p-4">
              <h3 className="text-xl font-semibold mb-2">{cls.name}</h3>
              <p className="text-gray-600 mb-1">Time: {cls.time}</p>
              <p className="text-gray-600 mb-1">Trainer: {cls.trainer}</p>
              <p className="text-gray-600 mb-1">Type: {cls.type}</p>
              <p className="text-gray-600 font-medium">Capacity: {cls.capacity}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClassScheduling;