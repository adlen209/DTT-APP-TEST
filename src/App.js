import React, { Component } from 'react';
import { BrowserRouter,Route} from 'react-router-dom'
import Navbar from './components/HomePage/Navbar'
import Home from './components/HomePage/Home'
import About from './components/RandomizerPage/About'
import Contact from './components/HomePage/Contact'
import Footer from './components/FooterPage/Footer'
import Recipe from './components/DetailsPages/Recipe'



// The Routes parameters for the application


class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
       <div className="App">
      <header className="header">
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/recipe/:id" component={Recipe}/>
      </header> 
       <Footer /> 
       </div>
      </BrowserRouter>
  
    )
  };
    
 
}
export default App;