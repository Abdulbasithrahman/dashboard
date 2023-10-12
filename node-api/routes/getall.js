const express = require('express');
const router = express.Router();
const axios = require('axios');


router.get('/', async(req, res)=> {
    try {
        const api_url = "https://jsonplaceholder.typicode.com/users"
        const response = await axios.get(api_url);
        const data = response.data;
        res.json(data);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
      }
});

module.exports = router;
