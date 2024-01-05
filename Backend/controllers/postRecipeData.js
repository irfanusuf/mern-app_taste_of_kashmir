const { fileLoader } = require('ejs');
const Recipe = require('../models/RecipeModel');
const cloudinary = require('cloudinary');
// const User = require ('../models/UserModel')


cloudinary.config({
    cloud_name: 'dbo0xmbd7',
    api_key: '717735839128615',
    api_secret: 'fqcjtd3HxpH_t1dAEtqr595ULW0'
});

const PostRecipeData = async (req, res) => {
    const { title, ingredients, instructions} = req.body;
//    const filePath = ''

const image = req.body.image;
    try {
        if (title !== "" && ingredients !== "" && instructions !== "") {
           
                const upload = await cloudinary.v2.uploader.upload(image, {
                    folder: "recipe-pics",
                });
    
                const newRecipe = new Recipe({
                    title,
                    ingredients,
                    instructions,
                    imageUrl : upload.secure_url
                       
                });
    
                await newRecipe.save();
                res.status(201).json({ message: "Recipe Created" });
          
        } else {
            res.json({ message: "All Fields Required" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
    
};

module.exports = PostRecipeData;
