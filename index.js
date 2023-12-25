const express = require('express');         // express is libraray in which we can make backend servers 
const axios = require('axios');             // js library like fetch
const cors = require('cors');               // cross origin resuorce sharing 
const bodyParser = require('body-parser')   // used to take data from body in the form of json
const app = express();
const port = 4000;
const mongoose = require('mongoose');
app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/Master');

const User = mongoose.model('User', {
  username: String,
  email: String,
  password: String,
});


app.post('/api/signup', async (req, res) => {
  try 
  {
    const { username, email, password } = req.body;
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully'});
  }

  catch (error) 
  {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// server side api call to third party server of rapid api (food recipe)
const fetchRecipe = async (params) => {
  try {
    const options = {
      method: 'GET',
      url: `https://food-recipes-with-images.p.rapidapi.com/?q=${params}`,
      headers: {
        'X-RapidAPI-Key': '79bd850338msh2791f9644fac656p197751jsnac6970a86c03',
        'X-RapidAPI-Host': 'food-recipes-with-images.p.rapidapi.com',
      },
    };
    const response = await axios.request(options);
    return response.data;
  }
  
  catch (error) {
    console.error(error);
    throw error;
  }
};



app.get('/api/recipes', async (req, res) => {
  try {
    const params = req.query.q;
    if (!params) 
    {
      res.status(500).json({ meow: 'no query' })
    }
    else
    {
      const recipeData = await fetchRecipe(params);
      res.json(recipeData);
    }


  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
