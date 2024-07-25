import React, { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import { Col, Row } from "react-bootstrap";

const recipes = [
  {
    id:1,
    author: "Jim",
    name: "Chicken Curry",
    description: "Chicken curry is a popular dish that varies widely across different cultures, with each region having its unique take on the recipe. ",
    image:'https://spiceeats.com/wp-content/uploads/2020/02/Mild-Chicken-Curry.jpg',
    ingredients:'chicken,Spices,Onion, garlic,ginger,Tomatoes,Yogurt/Coconut Milk and Oil or Ghee'
  },
  {
    id:2,
    author: "Aravind",
    name: "Hamburger",
    description: "A hamburger is a popular sandwich that consists of a cooked ground meat patty, usually beef, placed inside a sliced bun or bread roll. It can be customized with a variety of toppings and condiments.",
    image:'https://www.allrecipes.com/thmb/UsNtGp9OgIsKw6cPqGQ-CxLmnTE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/AR-72657-best-hamburger-ever-ddmfs-4x3-hero-878e801ab30445988d007461782b3c25.jpg',
    ingredients:'Ground Beef,Salt and Pepper,Sliced fresh tomatoes,Onions'
  },
  {
    id:3,
    author: "Max Millar",
    name: "Fish Curry",
    description: "Fish curry is a flavorful dish that can vary widely depending on the region and style of cooking. It's popular in many coastal regions around the world, including India, Southeast Asia, and the Caribbean.",
    image:'https://static.toiimg.com/thumb/58985156.cms?imgsize=319624&width=800&height=800',
    ingredients:'Fish Pieces, Lemon juice, salt, turmeric, chili powder, Onions, Garlic, Ginger,Garam Masala, Curry Leaves and Mustard Seeds '
  },
  {
    id:3,
    author: "James",
    name: "Vegetable Stir-Fry",
    description: "A versatile and colorful dish that's quick to make and can be customized with your favorite vegetables. It's perfect for a healthy and delicious meal.",
    image:'https://www.budgetbytes.com/wp-content/uploads/2022/03/Easy-Vegetable-Stir-Fry-close.jpg',
    ingredients:'Vegetables,Oils,Sauces, garlic and ginger '
  },
  {
    id:3,
    author: "Alan",
    name: "Palak Paneer",
    description: "A popular and nutritious Indian dish made with spinach and paneer (Indian cottage cheese). It's a flavorful and creamy curry that's perfect with naan, roti, or rice.",
    image:'https://healthynibblesandbits.com/wp-content/uploads/2020/01/Saag-Paneer-FF.jpg',
    ingredients:'Paneer, spinach, onion, tomato, garlic, turmeric powder, coriander powder, Salt'
  }
];

function App() {
  const [recipe,setRecipe] = useState(null)

  const onClickRecipe = (recipe)=>{
    setRecipe(recipe)
  }

  const [searchQuery, setSearchQuery] = useState('');
    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
      };
      // Filter recipes based on search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchQuery.toLowerCase())
  );


  return <div className="App">
    <Header recipes={recipes}  setRecipe={setRecipe}   />
    <div>

            <Row>
              <Col style={{height:'100vh'}} className="bg-dark" sm={12} md={3}>
                <div className="m-3">
                    <input className='form-control'  type="text" placeholder='Search Recipe Name' value={searchQuery} onChange={handleSearchChange} />
                </div>
                <RecipeList recipes={filteredRecipes} onClickRecipe={onClickRecipe}  />
              </Col>
              <Col sm={12} md={9}>
              {recipe ? <RecipeDetails recipe={recipe}  /> : 

                  <div className="mt-5 ms-5 text-center">
                    <h1 style={{fontWeight:'800'}}>Welcome to Recipe Book</h1>
                    <p className="text-warning">Please select a recipe to see the details.</p>
                    <img style={{width:'300px'}} src="https://media.istockphoto.com/id/1185879263/vector/recipe-book-hand-drawn-cover-vector-illustration.jpg?s=612x612&w=0&k=20&c=LMU-L5FcyKYdzPdB_ZNc0mQlFCwMyJM4iI94ZzBfpQM=" />
                  </div>

}
              </Col>
            </Row>
        
           
        
    </div>

  </div>;
}

export default App;
