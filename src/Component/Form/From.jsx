import { useRef, useState } from "react";
import PasswordValidator from "../../helper/PasswordValidator";
import EmailValidator from "../../helper/EmailVAlidator";


function From() {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const [formValue, setFormValue] = useState({
        email :'',
        password : ''
    })

    const handlePasswordValidation = () => {
        const password = formValue.password;
        if(!PasswordValidator(password)) {
            passwordRef.current.style.border = "2px solid red";  // Example of using useRef to directly manipulate the DOM. or passwordRef.current.focus();
            alert("Password is not valid");
        } 
        else {
            alert("Password is valid");
        }
    }

    const handleEmailValidation = () => {
        const email = formValue.email;
        if(!EmailValidator(email)) {
            emailRef.current.style.border = "2px solid red";  // Example of using useRef to directly manipulate the DOM. or emailRef.current.focus();
            alert("Email is not valid");
        }   
        else {
            alert("Email is valid");
        }
    }

    function handleFormSubmit(e) {  
        e.preventDefault();
        console.log(formValue);
        handlePasswordValidation();
        handleEmailValidation();
    }

  return (
    <div className="form-container">
        <h1>Form</h1>
        <form onSubmit={handleFormSubmit} >
            <div className="email-input-wrapper">
                <label htmlFor="email">Email</label>
                <input  value={formValue.email}  ref={emailRef}
                onChange={(e) => setFormValue({...formValue, email : e.target.value})}
                    type="email" name="email" id="email" placeholder='Enter your email'
                />
            </div>

            <div className="password-input-wrapper">
                <label htmlFor="password">Password</label>
                <input  value={formValue.password} ref={passwordRef}
                onChange={(e) => setFormValue({...formValue, password : e.target.value})}
                    type="password" name="password" id="password" placeholder='Enter your password' 
                />
            </div>

            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default From