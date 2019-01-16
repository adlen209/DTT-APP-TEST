import React from 'react'

// The Form page, to search for a recipes
const Form = props => {
    return (
      <div className="container">
         
        <div className="col s6 offset-m3">  
             <form onSubmit={props.getRecipe}>
                <div className="input-field">
                <label className="label-icon prefix"><i className="material-icons prefix">search</i></label>  
                <input placeholder="Chicken, shrimp, coco, etc..." type="text" name="recipeName"></input>
                <div className="input-field center">
                <button  className="btn waves-effect waves-light">Search</button>    
                </div>
                </div>
             </form>
        </div>
     </div>
      
       
    )
}

export default Form;