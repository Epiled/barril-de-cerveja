const express = require('express');
const app = express();
const fileUpload = require('express-fileupload');
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/model-cerveja');
const path = require('path')
const { dirname } = require('path');
const { Op } = require("sequelize");
const multer = require("multer");

app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,"assets/imgs/")
    },
    filename: function(req, file, cb){
        cb(null, file.originalname)
    }
})

const upload = multer({storage})

app.use('/css', express.static(__dirname + '/assets/css'))
app.use('/js', express.static(__dirname + '/assets/js'))
app.use('/fonts', express.static(__dirname + '/assets/fonts'))
app.use('/imgs', express.static(__dirname + '/assets/imgs'))
app.use('/svgs', express.static(__dirname + '/assets/svgs'))

app.use(express.urlencoded({extended: false}))
app.use(express.json())
//app.use(fileUpload());


app.post('/profile', upload.single('imagemCerveja'), function (req, res, next) {
    // req.file is the `avatar` file
    // req.body will hold the text fields, if there were any
    res.send("Post criado com sucesso!")
  })

app.post("/nova-pagina", upload.single("imagemCerveja"), function(req, res, next) {

    Post.create({
        //imagemCerveja: req.file.path.replace(/\\/g,"/"),
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
    }).then(function(post){
        res.send(post.imagemCerveja+"Post criado com sucesso!")
    }).catch(function(erro){
        res.send("Houve um erro: " + erro)
    })
    let teste = req.file.path
    res.json(teste)
})

app.get("/", function(req, res){
    Post.findAll({
        where: {
            [Op.or]:[
                {id: 1},
                {id: 2},
                {id: 52},
                {id: 51}
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