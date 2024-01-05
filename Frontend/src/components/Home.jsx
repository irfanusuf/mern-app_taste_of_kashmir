import React from 'react'
import '../styles/Home.scss'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>


      <div className='main-section'>


        <div className='section-right'>

          <h1> Explore the World of Recipes !</h1>
          <p>Where u will Find recipes Recreated!</p>



          <div className='explore-buttons'>

            <Link to='/signup'> Register </Link>
            {/* <Link to='/login'> Login </Link> */}
            <Link to='/recipes'> Explore </Link> 

          </div>

          
            

          






        </div>



      </div>




    </div>
  )
}

export default Home