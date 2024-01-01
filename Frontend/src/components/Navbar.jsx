import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
    const navigate = useNavigate();
    const [message, setMessage] = useState("")
    const isLoggedIn = localStorage.getItem('token');
    const handleLogout = async () => {
        localStorage.removeItem('token');
        setMessage(" You have been logged Out Succesfully! ")
        setTimeout(() => setMessage(''), 6000);
        navigate('/');
    }


    return (
        <div className='navbar'>

            <div className='left-nav'>
                <ul>
                    <li> <Link to='/'> Home </Link> </li>
                    <li> <Link to='/recipes'> Recipes </Link> </li>
                    <li> <Link to='/signup'> Register </Link> </li>
                    <li> <Link to='/login'> Login </Link> </li>
                </ul>
            </div>


            <div className='right-nav'>


                <p>{message && `${message}`}</p>


                {isLoggedIn && (
                    <button onClick={handleLogout} >
                       Logout
                    </button>
                )}
            </div>


        </div>
    )
}

export default Navbar