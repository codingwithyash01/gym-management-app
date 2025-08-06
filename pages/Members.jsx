import React from 'react';

const Members = () => {
  const members = [
    { id: 1, name: 'John Doe', membership: 'Premium', joinDate: 'Jul 15, 2025', status: 'Active' },
    { id: 2, name: 'Jane Smith', membership: 'Basic', joinDate: 'Aug 01, 2025', status: 'Active' },
    { id: 3, name: 'Mike Johnson', membership: 'VIP', joinDate: 'Jun 20, 2025', status: 'Inactive' },
    { id: 4, name: 'Sarah Williams', membership: 'Premium', joinDate: 'Jul 10, 2025', status: 'Active' },
  ];

  return (
    <section className="py-12 px-4 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold mb-6 text-center">Members List</h2>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full text-left">
            <thead className="bg-gray-200">
              <tr>
                <th className="p-4">Name</th>
                <th className="p-4">Membership</th>
                <th className="p-4">Join Date</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {members.map((member) => (
                <tr key={member.id} className="border-t">
                  <td className="p-4">{member.name}</td>
                  <td className="p-4">{member.membership}</td>
                  <td className="p-4">{member.joinDate}</td>
                  <td className="p-4">
                    <span
                      className={`px-2 py-1 rounded-full text-sm ${
                        member.status === 'Active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Members;