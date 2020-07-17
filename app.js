const express = require('express');
const mongoose = require('mongoose');
const app = express();
const posts = require('./routes/posts');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use('/api/posts',posts);

mongoose.connect("mongodb+srv://mongouser:mongopassword@cluster0.txbkd.mongodb.net/myDatabase?retryWrites=true&w=majority" ,{useUnifiedTopology: true ,useNewUrlParser: true } );
const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => console.log("Connected to database server"));






app.listen(3000);
