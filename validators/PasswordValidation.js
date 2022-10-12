const PasswordValidate=(Password)=>{
    var validRegex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    try {
        if(!Password.match(validRegex)){
            throw "Please enter a valid Password";
        }
        return true
    } catch (error) {
        return error
    }
}
export default PasswordValidate