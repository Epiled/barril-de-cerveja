const db = require("../controllers/conexao-db");

const Marcas = db.sequelize.define('marcas', {
    imagemMarca: {
        type: db.Sequelize.STRING
    },
    nomeMarca: {
        type: db.Sequelize.STRING
    },  
})

module.exports = {
    Sequelize: db.Sequelize,
    sequelize: db.sequelize,
}

//Marcas.sync({force:true})