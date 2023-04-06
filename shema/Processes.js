// Обработки
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const processesShema = new Schema ({
    // Статус
    status: {
        type: String,
        enum: ['вариант 1', 'варинат 2', 'вариант 3', 'вариант 4'],
        default: "",
        require: true
    },
    // Вид маркетплейса
    typeMP: {
        type: String,
        enum: ['Wildberries', 'OZON', 'Яндекс.Маркет', 'Сбермаркет'],
        default: "",
        require: true
    },
    // Приёмки
    idAcceptances: {
        ref: 'acceptances',
        type: Schema.Types.ObjectId
    },
    // id Товары в обработке
    idProductsProcesses: [{
        ref: 'productsProcesses',
        type: Schema.Types.ObjectId
    }],
    // Дата поставки на склад
    dateInStorageFF: {
        type: Date,
        require: true
    },
    // Дата снятия товара со склада
    dateOutStorageFF: {
        type: Date,
        require: true
    },
    // Счёт
    finalPriceProcessing: {
        type: Number,
        require: true
    }
})

module.exports = mongoose.model('processes',processesShema)