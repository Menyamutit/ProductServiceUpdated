const processesService = require('../shema/processesService.js')



class serviceprocessesService {
    //    Добавлене новой услугиа в бд
    async add(processesServiceData) {
        const keys = Object.keys(processesServiceData);
        const number = keys.length;
        const processesServiceKeys = Object.keys(processesService.schema.obj);
        if (number != processesServiceKeys.length) {
            return "Отсутствует поле"
        }
        for (let key in processesServiceData) {
            if (processesServiceData[key] == null || processesServiceData[key] === '') {
                return "Поле, или несколько полей не заполнены"
            }
        }
        const result = await processesService.create(processesServiceData);
        return { message: "Успешно", result }
    }

    //    Получение списка всех услуг из бд
    async getAll() {
        return await processesService.find();
    }

    //    Получение списка всех найденных услуг из бд
    async find(query) {
        const result = await processesService.find(query)
        if (result == "") {
            return "Не найдено"
        }
        return { message: "Найдено", result }
    }
    //    Редактирование услуг
    async update(processesServiceData) {
        if (!processesServiceData._id) {
            return "ID не указан"
        }
        const result = await processesService.findByIdAndUpdate(processesServiceData._id, processesServiceData, { new: true });
        if (!result) {
            return "ID не найден"
        }
        const keys = Object.keys(processesServiceData);
        const number = keys.length;
        const processesServiceKeys = Object.keys(processesService.schema.obj);
        console.log(number);
        console.log(processesServiceKeys.length);
        if (number - 1 != processesServiceKeys.length) {
            return "Не заполнены поля"
        }
        return "Успешно"
    }

    //    Удаление услуги из БД
    async delete(id) {
        const result = await processesService.findByIdAndDelete(id)
        if (!result) {
            return "ID не найден"
        }
        return "Успешно"
    }
}
module.exports = new serviceprocessesService();