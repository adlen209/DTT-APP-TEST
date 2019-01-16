import React,{Component} from 'react';
import {Link} from 'react-router-dom';

const API_KEY = "16b5a1eef6f7baa143638ee87851e5d0"; 

// This is the detail page: We have acces to more details with :
// The link to the recipe publisher, image, and title. 

class Recipe extends Component {
     state ={
       activeRecipe: []  
     }
     componentDidMount = async () => {
       
        const title = this.props.location.state.recipe;
        const request= await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${title}`)
        
    
    
        const response= await request.json();
        //console.log(response.recipes[0]);
        this.setState({activeRecipe: response.recipes[0] });
        console.log(this.state.activeRecipe);
    

     }

    render() {
        const recipe = this.state.activeRecipe;
        //console.log(this.props);
       return (
        <div className="container">
            {this.state.activeRecipe.length !==0 &&

            <div className="card">
                

               <div className="active-recipe">
                <img className="active-recipe__img" 
                 src={recipe.image_url} 
                 alt={recipe.title}/>
                 <h3 className="active-recipe__title">{recipe.title}</h3>
                 <h4 className="active-recipe__publisher">
                 Publisher: <span>{recipe.publisher}</span>
                </h4>
                <p className="active-recipe__website">Website:
                <span><a href={recipe.publisher_url}>{recipe.publisher_url}</a></span>    
                </p>
                <div className="input-field center">
                <button className="btn pink waves-effect waves-light">
                 <Link className="white-text" to="/">Go Home</Link>
                </button>
                </div>
              </div>
            </div>
            }

        </div>

       ) 
    }
}

   

export default Recipe;