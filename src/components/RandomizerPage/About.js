import React, {Component} from 'react';
import orange from "../../img/logofinal.png"
import adlen from "../../img/Adlen.jpg"


//For the randomizer page, I decide to render random food quotes, with a random button :)
   
   const quotesFood = [
       {'quote' : "Everything you see I owe you spaghetti.",
           "by": "- Sophia Loren"},
       {'quote' : "Food is an important part of a balanced diet.",
           "by": "- Fran Lebowitz"},
       {'quote' : "I cook with wine. Sometimes I even add it to the food.",
           "by": "- W.C Fields"},
       {'quote' : "Caulifloweris nothing but cabbage with a college education.",
           "by": "- Mark Twain"},
       {'quote' : "If you are afraid of butter, use cream.",
           "by": "- Julia Child"},
       {'quote' : "The most remarkable thing about my mother is that for thirty years, she served the family nothing but leftovers. The original meal has never been found.",
           "by": "- Calvin Trillin"},
       {'quote' : "Cooking is like love. It should be entered into with abandon or not at all.",
           "by": "- Harriet Van Horne"},
       {'quote' : "Life is a combination of magic and pasta.",
           "by": "- Federico Fellini"},
       {'quote' : "Promises and pie-crust are made to be broken.",
           "by": "- Jonathan Swift"},
       {'quote' : "Cheese -milk's leap toward immortality.",
           "by": "- Clifton Fadiman"},
   ];

class About extends Component {
  constructor() {
    super();
    this.state = {
        // quote: "",
        // quotedBy: ""
        // randomNumBtwn0and99: ""
    }
}
// This function allow to select a random quotes within the array
generateQuote =()=> {
    let randomNumBtwn0and99 = Math.floor(Math.random() * 10);
    let quote = quotesFood[randomNumBtwn0and99].quote;
    let quotedBy = quotesFood[randomNumBtwn0and99].by;


    return (<div className="row" id="card-panel">

               
                  <div className="col s6 offset-s3 ">
                  
                     <div className="card-panel teal">
                     <h3 className="white-text">"{quote}"</h3>
                     <h5 className="white-text">{quotedBy}</h5>
                     
                     <button className="btn pink waves-effect waves-light" onClick={this.onClick.bind(this)}>Random quote</button>

                     </div>
                  </div>
            

         </div>);
}
//By clicking to "random quotes", a new quote appear
onClick =() => {
  this.randomNumBtwn0and99 = Math.floor(Math.random() * 10);
  this.quote = quotesFood[this.randomNumBtwn0and99].quote;
  this.quotedBy = quotesFood[this.randomNumBtwn0and99].by;

  this.setState({
      quote: this.state.quote,
      quotedBy: this.state.quotedBy
  })
}

   render(){
     return(
        
       <div className="container-about">
                    <h2></h2>
                    <section className="container section" id="photos">

                       <div className="row">
                         <div className="col s12 l4">
                           <img src={orange} className="responsive-img2"/>
                          </div> 

                          <div className="col s12 l6 offset-l1">
                            <h2 className="teal-text">Recipe_ID®</h2>
                            <p className="teal-text">"Recipe Idea" is a website for people who want to cook for themselves, to explore and be creative !</p>
                            <p className="teal-text">I decided to create this site for people like me, who once there are in the kitchen, they don't really know what to cook and how to do it.</p>
                            <p className="teal-text">That's why you'll find here a whole bunch of original recipes to start learning, or just get inspired and give you ideas.</p>
                          </div>
                       </div>
                       <div className="row">
                         <div className="col s12 l4 push-l7">
                           <img src={adlen} className="responsive-img3"/>
                          </div> 

                          <div className="col s12 l6 pull-l4 right-align">
                            <h2 className="teal-text">The Chef Cook</h2>
                            <p className="teal-text">My name is Adlen Khelladi and I'm a expert in food. </p>
                            <p className="teal-text">By "expert" I mean the fact that I love to taste new flavors. I am a big fan of the French, Algerian and Dutch cuisine since I'm living in Netherlands.</p>
                            <p className="teal-text">The creation of this website, allow me to express my creativity and share my passion with food. "Creativity is a combinaison of discipline and childlike spirit"</p>
                            <p className="teal-text">Robert Green</p>
                          </div>
                       </div>
                     </section>
           <div className="quote_box">{this.generateQuote()}</div>
       </div>
     )
   }

}
export default About;








  


  