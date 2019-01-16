import React,{Component} from 'react';
import Form from './Form';
import Recipes from '../DetailsPages/Recipes';
import '../../App.css';



//https://www.food2fork.com/api/search?key=16b5a1eef6f7baa143638ee87851e5d0&q=chicken&count=10
//https://www.food2fork.com/api/search?key=d039f02041493e66db56d697e923ca00&count=30



const API_KEY = "16b5a1eef6f7baa143638ee87851e5d0";


class Home extends Component {
   state = {
     recipes: []

   }

   getRecipe = async (e) => {
         
    const recipeName = e.target.elements.recipeName.value;
    e.preventDefault();

    // The "count=10" mean that I want to display only 10 recipes, when someone write an ingredient on search bar.
    // Sometimes it display more than 10, so it could be a bug from the Public API
    const api_call= await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=10`)
    
    //console.log(recipeName);=> I always console.log(), to see if recipeName is rending on page

    const result= await api_call.json(); 
    this.setState({recipes: result.recipes});
    console.log(this.state.recipes);

    }
    componentDidMount = () => {
       if(localStorage.getItem("recipes")!=null){
        const data = localStorage.getItem("recipes");
        const recipes = JSON.parse(data);
        this.setState({recipes});
       }
       
    }

    componentDidUpdate = () => {
      const recipes = JSON.stringify(this.state.recipes);
      localStorage.setItem("recipes", recipes);
    }

    render() {
      return(
       <div className="container" id="home">
          <h2 className="center"> Welcome to Recipes_ID !</h2>
          <Form getRecipe={this.getRecipe}/>
          <Recipes recipes={this.state.recipes}/>
        </div>
      )

    }
     
}


export default Home;