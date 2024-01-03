import React, { useState } from 'react';
import axios from 'axios';

const PostRecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: '',
    instructions: '',
    image: null,
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

  

      const response = await axios.post('http://localhost:4000/api/post/recipe', formData);

      if (response.data.message === 'Recipe Created') {
        setMessage(response.data.message);
        
      } else {
        setMessage(response.data.message);
      }
    } catch (error) {
      console.error(error);
      setMessage('Internal Server Error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Post a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Ingredients:
          <textarea name="ingredients" value={formData.ingredients} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Instructions:
          <textarea name="instructions" value={formData.instructions} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Image:
          <input type="file" name="file" accept="image/*" onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit" disabled={loading}>
          {loading ? 'Posting...' : 'Post Recipe'}
        </button>
      </form>
      <div>{message && <p>{message}</p>}</div>
    </div>
  );
};

export default PostRecipeForm;
