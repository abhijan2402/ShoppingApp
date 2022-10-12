const EmailValidate=(email)=>{
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    try {
        if(!email.match(validRegex) || !value.includes("gmail.com")){
            throw "Please enter a valid email";
        }
        return true
    } catch (error) {
        return error
    }
}
export default EmailValidate