import React from 'react'
import Mfooter from '../Components/Mfooter'
import Hnav from '../Components/Hnav'
// import { Component } from 'react'
import "../styles/Contact.css"
import { useForm, ValidationError } from '@formspree/react';


function Contact(props) {

  const [state, handleSubmit] = useForm("mpzvlypn");
  if (state.succeeded) {
    alert(`Thank you for sharing your thoughts!!!`)
  }



    return (
      <>
        <Hnav></Hnav>
        <section id="sectt" >
          <div className="left-sidee">
            <h2>Locate Us</h2>
            <div className="imageee">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1669.5836535997385!2d-0.20904561221793772!3d5.572707763915039!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a127b314d7f%3A0x88f544a9f8be3594!2sBlueCrest%20University%20College!5e0!3m2!1sen!2sgh!4v1706644803465!5m2!1sen!2sgh" width="500" height="400" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>
          <div className="right-sideer">
            <h2>ANY THOUGHTS?</h2>
            <h4>We would love to hear from your soon</h4>






            <div className="container-signinn">
              <form onSubmit={handleSubmit}>
                <div className="input-boxx">
                  <input className="input-fields"
                    placeholder="Enter Your Full Name"
                    id="name"
                    type="name"
                    name="name"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>
                <div className="input-boxx">
                  <input className="input-fields"
                    placeholder="Your Mail"
                    id="email"
                    type="email"
                    name="email"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>
                <div className="input-boxx">
                 
                  <input className="input-fields"
                    placeholder="Phone Number" 
                    id="tel"
                    type="tel"
                    name="tel"
                  />
                  <ValidationError
                    prefix="Tel"
                    field="tel"
                    errors={state.errors}
                  />
                </div>
                <div className="input-boxx">

                  <input className="input-fields"
                    placeholder="Enter the Date"
                    id="date"
                    type="date"
                    name="date"
                  />
                  <ValidationError
                    prefix="Date"
                    field="date"
                    errors={state.errors}
                  />
                </div>
                <div className="input-boxx">
                  <input className="input-fieldsi" 
                    placeholder="Enter your Message"
                    id="text"
                    type="text"
                    name="text"
                  />
                  <ValidationError
                    prefix="Text"
                    field="text"
                    errors={state.errors}
                  />
                </div>
                <button className="input-submit" type="submit" disabled={state.submitting}>
                  Submit
                </button>
              </form>
            </div>
            <div className='small'>
              <h3><span>You can also reach us via Email</span><a href='mailto:mediconghana.gmail.com'>  @mediconghana.gmail.com</a></h3>
            </div>
          </div>

          

        </section >
        <Mfooter></Mfooter>
      </>

    )
  
}

export default Contact