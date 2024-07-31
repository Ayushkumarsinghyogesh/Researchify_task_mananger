import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ session: formData })
      });
      if (response.ok) {
        const result = await response.json();
        alert(result.message); // Handle successful login, e.g., redirect to another page
        // Example: redirect to home page or dashboard
        // window.location.href = '/home'; 
      } else {
        const errorData = await response.json();
        setError(errorData.errors.join(', '));
      }
    } catch (err) {
      console.error('Error:', err);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-4 bg-gray-800 rounded shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-700 text-white"
            placeholder="Enter your password"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 rounded text-white font-semibold hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
