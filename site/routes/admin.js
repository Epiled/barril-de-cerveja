const express = require('express');
const router = express.Router();
const Post = require('../models/model-cerveja');

router.get('/', (req, res) => {
    res.render('admin/login', {layout: 'simple.handlebars'})
})

router.get('/login', (req, res) => {
    res.render('admin/login', {layout: 'simple.handlebars'});
})

router.get('/nova-pagina', (req, res) => {
    res.render('admin/nova-pagina', {layout: 'simple.handlebars'});
})

router.get('/paginas', (req, res) => {
    Post.findAll().then(function(posts){
        res.render('admin/paginas', {posts: posts})
    })
})

router.get('/deletar/:id', (req, res) => {
    Post.destroy({where: {'id': req.params.id}}).then(() =>{
        res.redirect('/paginas')
    })
})

router.get("/posts", (req, res) => {
    Post.findAll().then(function(posts){
        res.render('home', {posts: posts})
    })
})

module.exports = router