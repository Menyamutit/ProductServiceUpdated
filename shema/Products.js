// Товары
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductssShema = new Schema({
    // Клиент
    idClietns: {
        ref: 'clients',
        require: true,
        type: Schema.Types.ObjectId
    },
    // Вид товара
    status: {
        type: String,
        enum: ['Одежда', 'Товар'],
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
    // штрих код
    barcodeProducts: {
        type: String,
        require: true
    },
    //артикул поставщика
    supplierArticl: {
        type: String,
        require: true
    },
    // Наименование
    nameProducts: {
        type: String,
        require: true,
        min: 2,
        max: 50
    },
    // Бренд
    brand: {
        type: String,
        min: 2,
        max: 30
    },
    // Фото
    photoBrand: {
        type: String,
        default: ''
    },
    // Цвет
    colorBrand: {
        type: String,
        require: true
    },
    // Размерный ряд(41, 42 ...)
    sizeRange: {
        type: Number,
    },
    // Ширина
    width: {
        type: Number
    },
    // Высота
    height: {
        type: Number
    },
    // Глубина
    depth: {
        type: Number
    },
    // Вес
    weight: {
        type: Number,
        require: true
    },
    // Состав
    compound: {
        type: String,
        require: true,
        min: 5
    },
    // Изготовитель
    manufacturer: {
        type: String,
        min: 2,
        max: 150
    },
    // Страна производителя
    manufacturerCountry: {
        type: String,
        require: true,
        min: 2,
        max: 40
    },
    // Адрес Изготовителя
    adressManufacturer: {
        type: String,
        min: 5,
        max: 150
    },
    // Дата изготовления
    dateOfManufacture: {
        type: Date,
        require: true
    },
})

module.exports = mongoose.model('Productss', ProductssShema)