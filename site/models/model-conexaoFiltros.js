const db = require("../controllers/conexao-db");

const Filtros = db.sequelize.define('filtros', {
  filtro: {
    type: db.Sequelize.STRING
  },
  tipo: {
    type: db.Sequelize.STRING
  },
}, {timestamps: false})

module.exports = {
  Sequelize: db.Sequelize,
  sequelize: db.sequelize,
}

//Filtros.sync({force:true})