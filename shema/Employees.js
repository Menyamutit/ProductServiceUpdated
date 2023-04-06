// Сотрудник
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const employeesShema = new Schema ({
    // Фамилия
    surname: {
        type: String,
        required: true,
        min: 2,
        max: 40
    },
    // Имя
    name: {
        type: String,
        required: true,
        min: 2,
        max: 20
    },
    // Отчество
    patronymic: {
        type: String,
        max: 45,
        min: 2,
    },
    // должность
    idPosition: {
        ref: 'positions',
        type: Schema.Types.ObjectId
    },
    // Склад ФФ на котором работает
    idStorageFF: {
        ref: 'storageFF',
        type: Schema.Types.ObjectId
    },
    // Логин
    login: {
        type: String,
        required: true,
        min: 5,
        max: 25
    },
    // Почта
    email: {
        type: String,
        required: true,
        unique: true
    },
    // Номер телефона
    numberPhone: {
        type: String,
        required: true,
        unique: true
    },
    // Пароль
    password: {
        type: String,
        required: true,
        unique: true,
        min: 7,
        max: 25
    },
    //Фото
    photo: {
        type: String,
        default: ""
    }
})

module.exports = mongoose.model('employees',employeesShema)