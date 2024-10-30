const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db")

// TODO - define the Band model
const Band = db.define("Band", {
    name: DataTypes.STRING,
    genre: DataTypes.STRING
})

module.exports = Band;