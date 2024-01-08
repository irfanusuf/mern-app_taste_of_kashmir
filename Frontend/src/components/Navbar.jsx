import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Navbar.scss'
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
        <div className='navbar background'>

            <div className='left-nav'>

            <Link to='/'  className='brand-name' > Zaik-e-Kashmir </Link>
               
            </div>

            <div className='centre-nav'>
                {isLoggedIn && (<Link to='/post/user/Recipe' > Post your Recipe </Link>)}
                {isLoggedIn && (<Link to='/fetch/user/Recipe' > Your Recipes </Link>)}

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