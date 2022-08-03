const db = require("./model-conexaoMarcas");

const PostMarcas = db.sequelize.define("marcas", {
    imagemMarca: {
        type: db.Sequelize.STRING
    },
    nomeMarca: {
        type: db.Sequelize.STRING
    }
})

module.exports = PostMarcas