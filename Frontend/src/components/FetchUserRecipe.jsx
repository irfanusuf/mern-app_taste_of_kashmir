import React from 'react'
import '../styles/RecipeCard.scss'

const FetchUserRecipe = () => {


    const imageUrl = 'iiiuiuy'
    const title = 'meow'
    const ingredients = 'meow'
    const instructions = 'ask waza'
    return (

        <div className='fetch-recipe'>
            <div className='recipe-card-container'>
                <div className='recipe-card'>

                <p>{title}</p>
                    <img src={imageUrl} alt='text' />
                    <h2>Title</h2>
                  <div> <p>{title}</p></div>  
                    <span>Ingredients</span>
                   <div><p>{ingredients}</p> </div> 
                    <p>Instructions </p>
                   <div>  <p>{instructions}</p></div>
                </div>

            </div>
        </div>
    )
}

export default FetchUserRecipe