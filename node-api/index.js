 const express = require('express');
 const cors = require('cors');


 const app = express();
 const port = 8000;

 const getAll = require('./routes/getall')

 app.use(express.json());
 app.use(cors());

 app.use("/getall",getAll);
 
 app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});