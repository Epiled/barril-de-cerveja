const db = require("./model-conexaoCervejas");

const Post = db.sequelize.define("cervejas", {
    imagemCerveja: {
        type: db.Sequelize.BLOB
    },
    nomeCerveja: {
        type: db.Sequelize.STRING
    },
    tipo: {
        type: db.Sequelize.STRING
    },
    teorAlcoolico: {
        type: db.Sequelize.STRING
    },
    fabricante: {
        type: db.Sequelize.STRING
    },
    slogan: {
        type: db.Sequelize.STRING
    },
    origem: {
        type: db.Sequelize.STRING
    },
    criador: {
        type: db.Sequelize.STRING
    },
    introduzido: {
        type: db.Sequelize.STRING
    },
    origemNome: {
        type: db.Sequelize.STRING
    }
});

module.exports = Post