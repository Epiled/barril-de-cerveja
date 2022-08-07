const db = require("./model-conexaoFiltros");

const Filtros = db.sequelize.define('filtros', {
  filtro: {
    type: db.Sequelize.STRING
  },
  tipo: {
    type: db.Sequelize.STRING
  },
}, {timestamps: false})

module.exports = Filtros;