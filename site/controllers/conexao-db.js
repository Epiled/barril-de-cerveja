const Sequelize = require('sequelize')
const sequelize = new Sequelize('barril-cerveja', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
  Sequelize: Sequelize,
  sequelize: sequelize,
}