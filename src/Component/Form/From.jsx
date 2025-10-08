import { useRef, useState } from "react";
import PasswordValidator from "../../helper/PasswordValidator";
import EmailValidator from "../../helper/EmailVAlidator";
import { useContext } from "react";
import InputForm from "./InputForm";
import { FormContext } from "../../context/FormContext";


function From() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

   /* const [formValue, setFormValue] = useState({
        email :'',
        password : ''
    })
    const handlePasswordValidation = () => {
        const password = formValue.password;
        if(!PasswordValidator(password)) {
            passwordRef.current.style.border = "2px solid red";  // Example of using useRef to directly manipulate the DOM. or passwordRef.current.focus();
            console.log("Password is not valid");
        } 
        else {
            console.log("Password is valid");
        }
    }
    const handleEmailValidation = () => {
        const email = formValue.email;
        if(!EmailValidator(email)) {
            emailRef.current.style.border = "2px solid red";  // Example of using useRef to directly manipulate the DOM. or emailRef.current.focus();
            console.log("Email is not valid");
        }   
        else {
            console.log("Email is valid");
        }
    }
    function handleFormSubmit(e) {  
        e.preventDefault();
        console.log(formValue);
        handlePasswordValidation();
        handleEmailValidation();
    }
    */

    // // Access formInput from context and handle form submission logic here
    const {formInput} = useContext(FormContext)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formInput);
        emailRef.current.setBorder("2px solid red");
        passwordRef.current.setBorder("2px solid red");
        // You can add validation logic here if needed
        //emailRef.current.setInvalid();
        //passwordRef.current.setInvalid();
        handleInvalidEmail();
        handleInvalidPassword();
    }
        
    const handleInvalidPassword = () => {
        if(!PasswordValidator(formInput.Password)) {
            passwordRef.current.setInvalid();
            passwordRef.current.Shake();
            passwordRef.current.focus();    
            passwordRef.current.setBorder("2px solid red");
        }
    }

    const handleInvalidEmail = () => {
        if(!EmailValidator(formInput.Email)) {
            emailRef.current.setInvalid();
            emailRef.current.Shake();
            emailRef.current.focus();
            emailRef.current.setBorder("2px solid red");
        }
    }


  return (
    <div className="form-container">
        <h1>Form</h1>
        <form onSubmit={handleFormSubmit} >
            <div className="email-input-wrapper">
               
               {/* <label htmlFor="email">Email</label>
               <input  value={formValue.email}  ref={emailRef}
                onChange={(e) => setFormValue({...formValue, email : e.target.value})}
                    type="email" name="email" id="email" placeholder='Enter your email'
                />
                */}
                <InputForm 
                    type="email" id="email" placeholder="Enter your email"
                    label="Email"
                    ref={emailRef}
                    checkOnBlur={handleInvalidEmail}
                />

            </div>

            <div className="password-input-wrapper">
                
                {/* <label htmlFor="password">Password</label>
                <input  value={formValue.password} ref={passwordRef}
                onChange={(e) => setFormValue({...formValue, password : e.target.value})}
                    type="password" name="password" id="password" placeholder='Enter your password' 
                />
                 */}
                
                <InputForm
                    type="password" id="password" placeholder="Enter your password"                 
                    label="Password"
                    ref={passwordRef}
                    checkOnBlur={handleInvalidPassword}
                    
                />
            </div>

            <button id="form-button" type="submit">Submit</button>
        </form>
    </div>
  )
}

export default From