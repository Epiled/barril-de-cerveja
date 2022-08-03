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
const admin = require("./routes/admin")

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

//Teste

const upload = multer({storage})

app.use('/css', express.static('assets/css'))
app.use('/js', express.static(__dirname + '/assets/js'))
app.use('/fonts', express.static(__dirname + '/assets/fonts'))
app.use('/imgs', express.static('/assets/imgs'))
app.use('/svgs', express.static('/assets/svgs'))

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.use("/admin", admin)

app.post("/nova-pagina", upload.single("imagemCerveja"), function(req, res, next) {

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
                {id: 3},
                {id: 4}
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



app.listen(8081, function () { console.log("Servidor") })