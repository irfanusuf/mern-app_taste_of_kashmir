const express = require('express');     // express is libraray in which we can make backend servers 
const axios = require('axios');         // js libraary     like fetch
const cors = require('cors');         // cross origin ports connection 
const app = express();
const port = 4000;
app.use(cors());




// server side api call    to third party server of rapid api (food recipe)
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
  } catch (error) {
    console.error(error);
    throw error;
  }
};





app.get('/api/recipes', async (req, res)=> {
  try {

    const params = req.query.q;

if(!params) {
  res.status(500).json({meow: 'no query'})
}
else {
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
