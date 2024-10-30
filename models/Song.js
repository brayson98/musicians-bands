const {Sequelize, DataTypes} = require("sequelize");
const db = require("../db")

// TODO - define the Song model
const Song = db.define("Song", {
    title: DataTypes.STRING,
    year: DataTypes.INTEGER,
    length: DataTypes.INTEGER
})

module.exports = 
    Song;