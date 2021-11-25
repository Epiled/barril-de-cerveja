const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/model-cerveja');
const path = require('path')
const { dirname } = require('path');
const { Op } = require("sequelize");

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use('/css', express.static(__dirname + '/assets/css'))
app.use('/js', express.static(__dirname + '/assets/js'))
app.use('/fonts', express.static(__dirname + '/assets/fonts'))
app.use('/imgs', express.static(__dirname + '/assets/imgs'))
app.use('/svgs', express.static(__dirname + '/assets/svgs'))

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(fileUpload());

app.get("/", function(req, res){
    Post.findAll({
        where: {
            [Op.or]:[
                {id: 1},
                {id: 2},
                {id: 19},
                {id: 18}
            ]
        }
    }).then(function(posts){
        res.render('index', {posts: posts}) 
    })
})

app.get("/cervejas", function(req, res){
    res.render('cervejas')
})

app.get("/historia-da-cerveja", function(req, res){
    res.render('historia-da-cerveja')
})

app.get("/marcas", function(req, res){
    Post.findAll().then(function(posts){
        res.render('marcas', {posts: posts})  
    })
})

app.get("/posts", function(req, res) {
    Post.findAll().then(function(posts){
        res.render('home', {posts: posts})
    })
})

app.get('/login', function(req, res){
    res.render('login');
})

app.get('/nova-pagina', function(req, res){
    res.render('nova-pagina');
})

app.post("/nova-pagina-add", function(req, res) {
    Post.create({
        imagemCerveja: req.files.imagemCerveja,
        nomeCerveja: req.body.nomeCerveja,
        tipo: req.body.tipo,
        teorAlcoolico: req.body.teorAlcoolico,
        fabricante: req.body.fabricante,
        slogan: req.body.slogan,
        origem: req.body.origem,
        criador: req.body.criador,
        introduzido: req.body.introduzido,
        origemNome: req.body.origemNome
    }).then(function(){
        res.send("Post criado com sucesso!")
    }).catch(function(erro){
        res.send("Houve um erro: " + erro)
    })
})

app.get('/paginas', function(req, res) {
    Post.findAll().then(function(posts){
        res.render('paginas', {posts: posts})
    })
})

app.get('/deletar/:id', function(req, res){
    Post.destroy({where: {'id': req.params.id}}).then(() =>{
        res.redirect('/paginas')
    })
})

app.listen(8081, function () { console.log("Servidor") })