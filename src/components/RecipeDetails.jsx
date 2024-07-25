import React from 'react'

function RecipeDetails({recipe}) {
  return (
    <div className='m-5 border rounded shadow p-5 '>
        <h2 style={{fontWeight:'700'}} className='text-center text-warning'>{recipe.name}</h2>
        <div className='recipe-details d-flex  mt-5'>
            <img style={{height:'200px',width:'400px'}} src={recipe.image} alt="" />
            <div  className='text-left p-3'>
                <p>{recipe.description}</p>
                <p><b>Ingredients :</b> {recipe.ingredients}</p>
                <p><b>author:</b> <span className='text-warning'>{recipe.author}</span></p>
                <button className='btn btn-warning'>Read More</button>
            </div>
        </div>
    </div>
  )
}

export default RecipeDetails