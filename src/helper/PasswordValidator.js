import React from 'react'

const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

function PasswordValidator(password) {
    if(password.length < 8) return false;
    if(!regex.test(password)) return false;
    return true;
 
}

export default PasswordValidator