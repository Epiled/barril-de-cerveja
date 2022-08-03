const Sequelize = require('sequelize')
const sequelize = new Sequelize('barril-cerveja', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})

const Marcas = sequelize.define('marcas', {
    imagemMarca: {
        type: Sequelize.STRING
    },
    nomeMarca: {
        type: Sequelize.STRING
    },  
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
}

//Marcas.sync({force:true})