const express = require('express');         // express is libraray in which we can make backend servers 
// const axios = require('axios');          // js library like fetch
const cors = require('cors');               // cross origin resuorce sharing 
const bodyParser = require('body-parser')   // used to take data from body in the form of json
const mongoose = require('mongoose');       // library for connecting with mongo db database
const handleRegister =require('./controllers/Register');
const fetchRecipeData =require('./controllers/fetchRecipeData')
const handleLogin = require ('./controllers/Login2')
require('dotenv').config();
const app = express();                       //intiating express app 
const port = process.env.PORT || 5000;       //defining port 
const url = process.env.MONGO_URL;

app.use(cors());                             //  using cors middleware which enables cross origin resource sharing 
app.use(bodyParser.json());                  // using bodyparser which converts body data into json 




// connecting mongodb on local host with master db 
if
(mongoose.connect(url))
{
  console.log(`Database Connected on ${url}`)
}


// defining routes and their handler functiions which are in seperate file systems
app.post('/api/signup', handleRegister);
app.post('/api/login', handleLogin);
app.delete('/api/logout') , (req, res) =>{
  res.json({message : "meow"})
}



app.get('/api/recipes', fetchRecipeData);


// starting a server which starts to listen on port defined in env 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
