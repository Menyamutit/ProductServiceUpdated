// Услуги обработки
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const processesServiceShema = new Schema ({
    // вид услуги
    typeService: {
        type: String,
        require: true
    },
    // название услуги
    nameService: {
      type: String,
      require: true,
      max: 150
    },
    // цена за услугу
    servicePriceProceService: {
        type: Number,
        require: true
    },
    // комментарий
    сommentProceService: {
        type: String,
        max: 400
    }
})

module.exports = mongoose.model('processesService',processesServiceShema)