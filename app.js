const express = require('express');

const app = express();
const posts = require('./routes/posts');


app.use('/api/posts',posts);




app.listen(3000);
