import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await axios.post('http://localhost:4000/api/signup', formData);
     console.log(response.data.message)
      if (response.status === 201) {
        setMessage('User created successfully');
      } else if (response.data.message === "User already exists") {
        setMessage('User with this email already exists');
      } else if (response.data.message === 'Invalid input') {
        setMessage('Invalid input. Please provide all fields.');
      } else {
        setMessage('Error creating user');
      }
    } catch (error) {
      console.error(error);
      
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div> {message && `${message}`}</div>
      <div className='heading'>
        <h1> Register </h1>
      </div>

      <div className='signup-container'>
        <form onSubmit={handleSubmit} className='signup-form'>
          <label>
            Username:
            <input
              type='text'
              name='username'
              value={formData.username}
              onChange={handleChange}
              
            />
          </label>
          <label>
            Email:
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              
            />
          </label>
          <label>
            Password:
            <input
              type='password'
              name='password'
              value={formData.password}
              onChange={handleChange}
              
            />
          </label>
          <button type='submit' disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </form>
      </div>
    </>
  );
};

export default Signup;
