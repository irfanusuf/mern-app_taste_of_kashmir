import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='navbar'>

            <div className='unordered-list'>
                <ul>
                    <li> <Link to='/'> Home </Link> </li>
                    <li> <Link to='/recipes'> Recipes </Link> </li>
                    <li> <Link to='/signup'> Register </Link> </li>
                    <li> <Link to='/login'> Login </Link> </li>
                   

                </ul>


            </div>

        </div>
    )
}

export default Navbar