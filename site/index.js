const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const Post = require('./models/model-cerveja');
const PostMarcas = require('./models/model-marcas');
const Filtros = require('./models/model-filtro');
const path = require('path');
const { dirname } = require('path');
const { Op, where } = require("sequelize");
const admin = require("./routes/admin");

app.engine('handlebars', handlebars({
  defaultLayout: 'main',
  helpers: {
    ifTipo: function (arg1, arg2, options) {
      return (arg1 == arg2) ? options.fn(this) : options.inverse(this);
    },
  }

}))
app.set('view engine', 'handlebars')

app.use('/css', express.static(__dirname + '/assets/css'))
app.use('/js', express.static(__dirname + '/assets/js'))
app.use('/fonts', express.static(__dirname + '/assets/fonts'))
app.use('/imgs', express.static(__dirname + '/assets/imgs'))
app.use('/svgs', express.static(__dirname + '/assets/svgs'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/admin", admin)

app.get("/", function (req, res) {
  const promesa = Promise.all([
    Post.findAll({
      where: {
        [Op.or]: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
        ]
      }
    }), PostMarcas.findAll({
      where: {
        [Op.or]: [
          { id: 1 },
          { id: 2 },
          { id: 3 },
          { id: 4 },
        ]
      }
    })]).then(function (posts) {
      const cervejas = posts[0];
      const marcas = posts[1]
      res.render('index', { title: "Barril De Cerveja", cervejas: cervejas, marcas: marcas })
    });
})

app.get("/cervejas", function (req, res) {
  const promesa = Promise.all([
    Filtros.findAll({
      where: {
        [Op.not]: [{ tipo: "origem" },]
      }
    }),
    Post.findAll()
  ]).then(function (posts) {
    const filtros = posts[0];
    const cervejas = posts[1];
    console.log(filtros);
    res.render('cervejas', { layout: 'list-pags.handlebars', title: "Cervejas", filtros: filtros, cervejas: cervejas })
  })
})

app.get("/cervejas/:id", function (req, res) {
  Post.findAll({ where: { 'id': req.params.id } }).then(function (posts) {
    res.render('cerveja', { layout: 'pag.handlebars', title: "Cervejas", posts: posts })
  })
})

app.get("/marcas", function (req, res) {
  PostMarcas.findAll().then(function (posts) {
    res.render('marcas', { layout: 'list-pags.handlebars', title: 'Marcas', posts: posts })
  })
})

app.get("/historia-da-cerveja", function (req, res) {
  res.render('historia-da-cerveja', { layout: 'historia-da-cerveja.handlebars', title: "História da Cerveja" })
})

app.listen(8081, function () { console.log("Servidor " + __dirname) })