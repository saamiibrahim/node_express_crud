const express = require('express');

const router = express.Router();
const Post = require('../models/Post');


router.get('/' , async(req,res) => {
    try{
    const posts = await Post.find();
    res.json(posts);
    }catch(err){
        res.json({message : err});
    }
    });

router.post('/', async (req,res) => {
    const posts = new Post({
        title : req.body.title,
        description: req.body.description

    });
    try {
    
        const savedPost = await posts.save();
        res.json(savedPost);

    }catch(err){
        res.json({message : err});
    }
});


router.delete('/:PostId' , async(req,res) => {
    try{
    const post = await Post.remove({ _id : req.params.PostId   });
    res.json(post);
    }catch(err){
        res.json({message : err});
    }
    });

router.put('/:PostId', async (req,res) => {
    try {
    const updatedPost = await Post.updateOne({ _id : req.params.PostId},{ $set : {
        title : req.body.title,
        description : req.body.description
    }});
    res.json(updatedPost);    
    }catch(err){
        res.json({message : err});
    }

});
module.exports = router;