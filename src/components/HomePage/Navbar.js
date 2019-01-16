import React,{Component} from 'react';
import {Link, NavLink} from 'react-router-dom'
import Logo from '../../img/logo.png'




class Navbar extends Component {



  render() {

    return (
      <div className="navbar-fixed">
        <nav className="nav wrapper red darken-3">
           <div className="container">
            
              <Link to="/" className="brand-logo"><img className="responsive-img" src={Logo}/></Link>
              <a href="#" className="sidenav-trigger" data-target="slide-out">
              
              </a>
              <ul className="right hide-on-med-and-down">
                <li><Link className="waves-effect" to="/">Home</Link></li>
                <li><NavLink className="waves-effect" to="/about">About</NavLink></li>
                <li><NavLink className="waves-effect" to="/contact">Contact</NavLink></li>
                <li><NavLink className="fas fa-random" to="/"></NavLink></li>
              </ul>
          </div> 
        </nav>
        
        
      </div>
  
      )





    

    
  }  
}

export default Navbar;