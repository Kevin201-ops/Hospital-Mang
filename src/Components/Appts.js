import React from "react"
import { useState } from "react"
import "../styles/Bookapp.css"
import { useForm, ValidationError } from '@formspree/react';





function Bookapp(props) {

    const [state, handleSubmit] = useForm("mkndzqja");
    if (state.succeeded) {
        alert(`Your appointment has been booked successfully!!!`)
    }


    return (

        <div className="popup">
            <div className="popup-inner">
                <img src='./logoo.png' width={"100px"} height={"50px"} />
                <div className='head'>
                    <h1>Welcome to Medicon</h1>
                    <p>Book an appointment today</p>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="input-bix">
                        <input
                            placeholder="Enter your Name"
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
                    <div className="input-bix">
                        {/* <label htmlFor="email">
                            Email Address
                        </label> */}
                        <input
                            placeholder="Enter your Email"
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
                    <div className="input-bix">

                        <input
                            placeholder="Enter your Phone Number"
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
                    <div className="input-boxx-dep" >
                        <select
                            name="Department" id="Departments" className="dept-box" required>

                            <option value="" disabled selected>Select a Department...</option>
                            <option value="Pediatrician">Paediatrician</option>
                            <option value="Dentist">Dentist</option>
                            <option value="Dermatologist">Dermatologist</option>
                            <option value="Gynaecologist">Gynaecologist</option>
                            <option value="Covid-19 Test">Covid-19 Test</option>

                        </select>
                        <ValidationError
                            prefix="departments"
                            field="departments"
                            errors={state.errors}
                        />
                    </div>
                    <div className="bixs">
                        <input
                            placeholder="Any signs and symptoms"
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
                    <button type="submit" disabled={state.submitting}>
                        Submit
                    </button>
                    <button className="button" onClick={props.toggle}>Close</button>
                </form>
            </div>
        </div>
    )
}

export default Bookapp

