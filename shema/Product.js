// Товары
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productShema = new Schema({
    // Клиент
    idClietns: {
        ref: 'clients',
        require: true,
        type: Schema.Types.ObjectId
    },
    // номер позиции - Если берём в расчёт, то что это айди товара, то нам эта строчка не нужна в БД, спросить у Виктора
    positionNumberProduct: {
        type: String,
        require: true
    },
    // штрих код
    barcodeProduct: {
        type: Number,
        require: true
    },
    //артикул поставщика
    supplierArticl: {
        type: String,
        require: true
    },
    // Наименование
    nameProduct: {
        type: String,
        require: true,
        min: 2,
        max: 50
    },
    // Бренд
    brand: {
        type: String,
        require: true,
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
        require: true,
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

module.exports = mongoose.model('product', productShema)