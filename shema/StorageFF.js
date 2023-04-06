// Склада ФФ
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const storageFFShema = new Schema({
    // Страна
    countryStorageFF: {
        type: String,
        require: true,
        max: 50
    },
    // Регион
    regionStorageFF: {
        type: String,
        require: true,
        max: 50
    },
    // Город
    towerStorageFF: {
        type: String,
        require: true,
        max: 50
    },
    // Индекс
    indexStorageFF: {
        type: Number,
        require: true,
        min: 10000,
        max: 999999
    },
    // Адрес
    adressStorageFF: {
        type: String,
        require: true,
        max: 150
    },
    // Номер телефона
    numberStorageFF: {
        type: String,
        require: true,
        max: 20
    }
})

module.exports = mongoose.model('storageFF', storageFFShema)