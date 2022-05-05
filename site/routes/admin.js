const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('admin/login')
})

router.get('/login', (req, res) => {
    res.render('login');
})

router.get('/nova-pagina', (req, res) => {
    res.render('nova-pagina');
})

router.get('/paginas', (req, res) => {
    Post.findAll().then(function(posts){
        res.render('paginas', {posts: posts})
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