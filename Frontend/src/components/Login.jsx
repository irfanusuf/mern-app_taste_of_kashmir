import React, { useState } from 'react';
import './Signup.css';
import axios from 'axios';

const Login = () => {


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

            console.log(response)

            if (response.data.message === 'Logged In Successfully') {
                setMessage('Logged in Succesfully');

            } else if (response.data.message === "Password Does Not Match") {
                setMessage('Password Does Not Match');



            } else if (response.data.message === 'User Not Found') {
                setMessage('User Not Found');

            }else if (response.data.message === 'All Credentials Required'){
                    setMessage('All credentials required '); 
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
                   
                    <label>
                        Password:
                        <input
                            type='password'
                            name='password'    //key
                            value={formData.password}    // value 
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

export default Login;
