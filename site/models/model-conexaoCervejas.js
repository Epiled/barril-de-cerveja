const db = require("../controllers/conexao-db");

const Cervejas = db.sequelize.define('cervejas', {
    imagemCerveja: {
        type: db.Sequelize.STRING
    },
    nomeCerveja: {
        type: db.Sequelize.STRING
    },
    tipo: {
        type: db.Sequelize.TEXT
    },
    teorAlcoolico: {
        type: db.Sequelize.TEXT
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
    },
})

module.exports = {
    Sequelize: db.Sequelize,
    sequelize: db.sequelize,
}

//Cervejas.sync({force:true})