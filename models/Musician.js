const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db")

// TODO - define the Musician model
const Musician = db.define("Musician", {
    name: DataTypes.STRING,
    instrument: DataTypes.STRING
})

module.exports = Musician;