const Processes = require('../shema/Processes.js')



class serviceProcesses {
    //    Добавлене нового процесса в бд
    async add(ProcessesData) {
        const keys = Object.keys(ProcessesData);
        const number = keys.length;
        const ProcessesKeys = Object.keys(Processes.schema.obj);
        if (number != ProcessesKeys.length) {
            return "Отсутствует поле"
        }
        for (let key in ProcessesData) {
            if (ProcessesData[key] == null || ProcessesData[key] === '') {
                return "Поле, или несколько полей не заполнены"
            }
        }
        const result = await Processes.create(ProcessesData);
        return { message: "Успешно", result }
    }

    //    Получение списка всех процессов из бд
    async getAll() {
        return await Processes.find();
    }

    //    Получение списка всех найденных процессов из бд
    async find(query) {
        const result = await Processes.find(query)
        if (result == "") {
            return "Не найдено"
        }
        return { message: "Найдено", result }
    }
    //    Редактирование процесса
    async update(ProcessesData) {
        if (!ProcessesData._id) {
            return "ID не указан"
        }
        const result = await Processes.findByIdAndUpdate(ProcessesData._id, ProcessesData, { new: true });
        if (!result) {
            return "ID не найден"
        }
        const keys = Object.keys(ProcessesData);
        const number = keys.length;
        const ProcessesKeys = Object.keys(Processes.schema.obj);
        if (number - 1 != ProcessesKeys.length) {
            return "Не заполнены поля"
        }
        return "Успешно"
    }

    //    Удаление процесса из БД
    async delete(id) {
        const result = await Processes.findByIdAndDelete(id)
        if (!result) {
            return "ID не найден"
        }
        return "Успешно"
    }
}
module.exports = new serviceProcesses();