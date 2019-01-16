import React from 'react'
import {Link, NavLink} from 'react-router-dom'

//I create a footer divided by 3 sections with Materialize.css grids (col s4)

const Footer = () => {
    return (
      <footer className="page-footer red darken-3">
        <div className="container">

          <div className="row center-align">
               <div className=" col s4">
                   <h5>Sitemap</h5>
                   <li><a href="/" className="title white-text">Home</a></li>
                   <li><a href="http://localhost:3000/about" className="title white-text">About</a></li>
                   <li><a href="http://localhost:3000/contact" className="title white-text">Contact</a></li>
               </div>
            
            
               <div className=" col s4">
                   <h5>Social Media</h5>

                   <li><a href="https://www.instagram.com/?hl=fr" className="tooltipped btn-floating btn-small teal lighten-2" data-tooltip="This is Instagram">
                       <i className="fab fa-instagram"></i></a></li>
                    <li><a href="https://www.facebook.com/" className="tooltipped btn-floating btn-small teal lighten-2" data-tooltip="This is Facebook">
                       <i className="fab fa-facebook"></i>  
                    </a></li>
                    <li><a href="https://twitter.com" className="tooltipped btn-floating btn-small teal lighten-2" data-tooltip="This is Twitter">
                       <i className="fab fa-twitter"></i>  
                    </a></li>
                    
               </div>

               <div className=" col s4">
                   <h5>Contact</h5>
                   <p>86 Groeneweg </p>
                   <p>8012 AR Zwolle </p>
                   <p> 
                    <a href="tel:+33684465567" className="number">+ 336 84 46 55 67</a>   
                      (support)  
                   </p>
                   <p>
                   <a href="mailto:khelladi.adlen@gmail.com" className="email">khelladi.adlen@gmail.com</a>   
                   </p>
                    
               </div>
        </div>
        </div>
        <div className="footer-copyright">
            <div className="container center-align">
            © 2019 Recipes_ID®
            </div>
          </div>
     </footer>
          

    )
}

export default Footer;