const Sequelize = require('sequelize')
const sequelize = new Sequelize('barril-cerveja', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})

const Cervejas = sequelize.define('cervejas', {
    imagemCerveja: {
        type: Sequelize.BLOB
    },
    nomeCerveja: {
        type: Sequelize.STRING
    },
    tipo: {
        type: Sequelize.TEXT
    },
    teorAlcoolico: {
        type: Sequelize.TEXT
    },
    fabricante: {
        type: Sequelize.STRING
    },
    slogan: {
        type: Sequelize.STRING
    },
    origem: {
        type: Sequelize.STRING
    },
    criador: {
        type: Sequelize.STRING
    },
    introduzido: {
        type: Sequelize.STRING
    },
    origemNome: {
        type: Sequelize.STRING
    },
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
}

//Cervejas.sync({force:true})