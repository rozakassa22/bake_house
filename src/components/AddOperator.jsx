// src/componenets/AddOperator.js
import React, { useState } from 'react';

const AddOperator = () => {
  const [email, setEmail] = useState('');
  const [otpSent, setOtpSent] = useState(false);

  const handleAddOperator = (e) => {
    e.preventDefault();
    // TODO: Integrate Firebase function to create user and send OTP
    console.log(`Add operator: ${email}`);
    setOtpSent(true);
  };

  return (
    <div className="container mx-auto h-screen bg-white p-4">
      <h2 className="text-2xl font-bold mb-4">Add Operator</h2>
      <form onSubmit={handleAddOperator}>
        <label className="block mb-2 text-sm font-medium text-gray-700">Operator Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 mb-4 border rounded-lg"
          placeholder="Enter operator's email"
        />
        <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600">
          Send OTP
        </button>
      </form>
      {otpSent && <p className="mt-4 text-green-500">OTP sent to {email}</p>}
    </div>
  );
};

export default AddOperator;
