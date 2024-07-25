import React from 'react'
import { Link } from 'react-router-dom'

function RecipeList({recipes,onClickRecipe}) {
  return (
    <div className='ms-3 mt-5 '>
                    {recipes.map((item)=>(
                        <div style={{borderBottom:'1px solid rgb(97, 93, 93)'}} className='mb-4 p-3'>
                        <button className='btn btn' onClick={()=>onClickRecipe(item)} style={{textDecoration:'none',color:'#ffffff',border:'none'}} >{item.name}</button>
                    </div>
                    ) )} 
                    
                    

                </div>
  )
}

export default RecipeList