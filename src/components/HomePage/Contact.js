import React from 'react'

//For the contact page, I use a card panel and a small form (text-area and checkbox)

const Contact = () => {
    return (
      <div className="contact-font">
      <h4 className="white-text center">Contact</h4>

         <section className="section container">
             <div className="row">
                    <div className="col s6 offset-s3 ">
                        <div className="card-panel teal lighten-2">
                   
                      <h2 className="white-text text-darken-4">Get in Touch</h2>
                      <p className="white-text">If you want more information, please don't hesitate to contact me on my email address or by phone.</p>
                      <p className="white-text">To ensure your request is dealt with promptly,please take a moment to complete the form to help me learn more about your requests.</p> 
                     </div>
                </div>
            </div>
          </section>

          <div className="row">
            <form className="col s4">
                <div className="row">
                   <div className="input-field col s12 offset-s12">
                       <i className="material-icons prefix">account_circle</i>
                       <input id="first_name" type="text" class="validate"/>
                       <label for="first_name">First Name</label>
                    </div>  
                    <div className="input-field col s12 offset-s12">
                       <i className="material-icons prefix">account_circle</i>
                       <input id="last_name" type="text" class="validate"/>
                       <label for="last_name">Last Name</label>
                    </div>  
                    <div className="input-field col s12 offset-s12">
                    <i className="material-icons prefix">email</i>
                       <input id="email" type="email" class="validate"/>
                       <label for="email">Email</label>
                    </div>  
                    <div className="input-field col s12 offset-s12">
                        <i className="material-icons prefix">messages</i>
                       <textarea id="message" className="materialize-textarea" data-length="120"/>
                       <label for="message">Your message</label>
                    </div>  
                    <div className="input-field col s12 offset-s12">
                        <p>Services required...</p>
                        <p>
                        <label>
                            <input type="checkbox"/>
                            <span>New recipes</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox"/>
                            <span>Publish your recipe</span>
                        </label>
                        </p>
                        <div className="input-field center">
                            <button className="btn pink waves-effect waves-light">Submit</button>
                        </div>
                    </div>

                </div>
            </form>
          </div>
          

      </div>
       
    )
}

export default Contact;