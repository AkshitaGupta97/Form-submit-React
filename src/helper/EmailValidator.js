
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function EmailValidator(email) {
    if(email.length < 8) return false;
    if(!regex.test(email)) return false;
    return true;
}

export default EmailValidator