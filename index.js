// configuration
const express = require('express');
const app = express();
const PORT = 3001;

//routes imports
const userRoutes = require('./routes/userRoutes');


app.use(userRoutes);



app.listen(PORT,()=>{
    console.log(`Server is up and running in port ${PORT}` );
})