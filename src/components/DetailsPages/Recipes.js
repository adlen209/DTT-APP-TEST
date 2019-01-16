import React from 'react';
import {Link} from 'react-router-dom';

// The recipes page, display all the recipes from the public API with : image, title, text and the button to display the detail page.

const Recipes = props => (
   <div className="container">
     <div className="row">
         {props.recipes.map((recipe)=> {
           return (
             <div key={recipe.title} className="col s12 m6" style={{marginBottom:"2rem"}}>
               <div className="recipes__box">
                <img 
                className="recipe__box-img" 
                src={recipe.image_url} 
                alt={recipe.title}/>
                <div className="recipe__text">
                   <h5 className="recipes__title">
                    {recipe.title.length < 20 ? `${recipe.title}`:`${recipe.title.substring(0, 25)}...`}
                    </h5>
                  <p className="recipes__subtitle">Publisher:<span>
                    {recipe.publisher}
                  </span></p>
                </div>
                <a href="#" className="btn floating pink pulse">
                  <i className="material-icons">favorite</i>
                </a>
                <div className="input-field center">
                <button className="waves-effect waves-light btn-small">
                <Link className="white-text" to={{
                  pathname:`/recipe/${recipe.recipe_id}`,
                  state:{recipe: recipe.title}
                  
                  }}>View recipe</Link>
                </button>
                </div>
               </div>
               </div>
             
            )
          })}
      </div>
    </div>
);
  
export default Recipes;