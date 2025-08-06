import React from 'react';
const FeaturesSection = () => {
  return (
    <section className="py-12 px-4 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Complete Gym Management Solution</h2>
      <p className="mb-6">Everything you need to run a successful fitness center, from member management to financial tracking.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-xl font-semibold text-red-600">Member Management</h3>
          <p>Handle memberships, payments, and track member renewals with ease.</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-xl font-semibold text-red-600">Class Scheduling</h3>
          <p>Schedule classes, manage capacity, and allow members to book their favorite sessions.</p>
        </div>
        <div className="p-4 bg-white rounded shadow">
          <h3 className="text-xl font-semibold text-red-600">Trainer Management</h3>
          <p>Manage trainer schedules, certifications, and provide access to digital check-ins.</p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;