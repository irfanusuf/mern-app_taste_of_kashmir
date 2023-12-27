const User = require ('./UserModel');
const bcrypt = require('bcrypt');




const handleLogin = async (req , res) =>
{

try{
    const { email , password } = req.body;
    const isUser = await User.findOne({email});    // by email finding user in database users
    
    if(email !== "" && password !==""){
        if (isUser) {
            const passVerify = await bcrypt.compare(password , isUser.password);
       if(passVerify){
            res.status(200).json({message : "Logged In Succesfully"})
       }
       else{
           res.status(500).json({message : "Password Doesnot Match"})
       }
         
       }
       else {
       
           res.json({message: "user not found "})
       }
    }
    
    else{
    
        res.json({message : "All credentials Required"})
    }
    
}
catch(error)
{
console.log(error);
response.json({message : "internal server error "})
}





}



module.exports = handleLogin;