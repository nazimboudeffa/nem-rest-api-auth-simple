const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const  cors = require("cors");
// Import Routes
const authRoute = require('./routes/auth');
const postsRoute = require('./routes/posts');

dotenv.config();

// Connect to DB
mongoose.connect('mongodb+srv://nazimboudeffa:'+process.env.PASS+'@cluster0.fruqwgc.mongodb.net/?retryWrites=true&w=majority', () => {
    console.log('Connected to DB!');
});

// Middleware
app.use(express.json());

// Route Middleware
app.use(cors());
app.use('/api/user', authRoute);
app.use('/api/posts', postsRoute);

app.listen(5000, ()=> console.log('Server up!'));