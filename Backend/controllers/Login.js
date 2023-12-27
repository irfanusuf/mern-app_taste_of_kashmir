const User =require ('./UserModel')
const bcrypt = require('bcrypt');




const handleLogin = async (req, res) => {

    try {

        const { email, password } = req.body;
        const isUser = await User.findOne({ email })
        
            if (email !== "" && password !== "") {

                if(isUser){
                    const verifyPassword = await bcrypt.compare (password , isUser.password )
                    if (verifyPassword){
                        res.status(201).json({message : "Welocme, You have been logged in"})
                    }
                    else{
                        res.status(500).json({message: "Wrong password"})
                    }
                }

 
        else {
            res.status(200).json({ message: "Account does'nt exists" })
        }
            }
            else {
                res.status(200).json({ message: "All credentials required" })
            }
       
    }
    catch (error) {
        console.error(error)
    }

}


module.exports = handleLogin;