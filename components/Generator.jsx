import React from 'react';
function Generator() {
  return (
    <div className="generator">
      <h2 className="text-2xl font-bold">Workout Generator</h2>
      <p className="py-4">
        Get a personalized workout plan based on your fitness level and goals.
      </p>
      <button className="btn btn-secondary">Generate Workout</button>
    </div>
  );
}
export default Generator;