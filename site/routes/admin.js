const express = require('express');
const router = express.Router();
const Post = require('../models/model-cerveja');
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "assets/imgs/")
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage })

router.get('/', (req, res) => {
    res.render('admin/login', {layout: 'simple.handlebars'})
})

router.get('/login', (req, res) => {
    res.render('admin/login', {layout: 'simple.handlebars'});
})

router.get('/nova-pagina', (req, res) => {
    res.render('admin/nova-pagina', {layout: 'simple.handlebars'});
})

router.post("/nova-pagina", upload.single("imagemCerveja"), function (req, res, next) {

  Post.create({
    imagemCerveja: req.file.filename,
    nomeCerveja: req.body.nomeCerveja,
    tipo: req.body.tipo,
    teorAlcoolico: req.body.teorAlcoolico,
    fabricante: req.body.fabricante,
    slogan: req.body.slogan,
    origem: req.body.origem,
    criador: req.body.criador,
    introduzido: req.body.introduzido,
    origemNome: req.body.origemNome
  }).then(function (post) {
    res.send(post.imagemCerveja + "Post criado com sucesso!")
  }).catch(function (erro) {
    res.send("Houve um erro: " + erro)
  })
  //let teste = req.file.path
  //res.json(teste)
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