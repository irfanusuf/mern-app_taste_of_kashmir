import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = () => {

    const navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };







    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            const response = await axios.post('http://localhost:4000/api/login', formData);

            if (response.data.message === 'Logged In Successfully') {
                setMessage('Logged in Succesfully');
                const { token } = response.data;
                localStorage.setItem('token', token);
                navigate('/recipes');

            } else if (response.data.message === "Password Does Not Match") {
                setMessage('Password Does Not Match');


            } else if (response.data.message === 'User Not Found') {
                setMessage('User Not Found');


            } else if (response.data.message === 'All Credentials Required') {
                setMessage('All credentials required ');
            }




        } catch (error) {
            console.error(error);
            setMessage(error);

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='Login-page'>




            <div className='heading'>
                <h1> Login </h1>
            </div>

            <div className='signup-container'>
                <form onSubmit={handleSubmit} className='signup-form'>

                    <label> Email: </label>

                    <input
                        type='email'
                        name='email'   //key
                        value={formData.email}    //value
                        onChange={handleChange}

                    />

                    <label> Password:</label>
                    <input
                        type='password'
                        name='password'    //key
                        value={formData.password}    // value 
                        onChange={handleChange}

                    />

                    <button type='submit' disabled={loading}>
                        {loading ? 'Logging .....' : 'Login'}
                    </button>
                    <div className='notification'> {message && `${message}`}</div>
                </form>
            </div>

            <div className='Disclaimer'>
                <p style={{fontSize:20}}><strong> Disclaimer: </strong></p>
                <p>By logging into this app, you agree to abide by our terms of service and acknowledge that the app collects and securely stores your login information for authentication purposes only. Your privacy and data security are our top priorities.</p>

            </div>


        </div>
    );
};

export default Login;
