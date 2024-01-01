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
      } else if (response.data.message === 'All credentials required') {
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
    <div className='Signup-page'>

      <div className='heading'>
        <h1> Register </h1>
      </div>

      <div className='signup-container'>
        <form onSubmit={handleSubmit} className='signup-form'>
          <label>
            Username:  </label>
          <input
            type='text'
            name='username'
            value={formData.username}
            onChange={handleChange}

          />

          <label>
            Email:  </label>
          <input
            type='email'
            name='email'
            value={formData.email}
            onChange={handleChange}

          />

          <label>
            Password:  </label>
          <input
            type='password'
            name='password'
            value={formData.password}
            onChange={handleChange}

          />

          <button type='submit' disabled={loading}>
            {loading ? 'Signing Up...' : 'Sign Up'}
          </button>

          <div className='notification'> {message && `${message}`}</div>
        </form>
      </div>

      <div className='Disclaimer'>
        <p style={{ fontSize: 20 }}><strong> Disclaimer: </strong></p>
        <p>By registering in our app, you acknowledge and agree that we will collect and securely store your provided information for authentication and personalized user experience. Rest assured, your privacy is our priority, and we are committed to safeguarding your data in compliance with our privacy policy.</p>

      </div>

    </div>
  );
};

export default Signup;
