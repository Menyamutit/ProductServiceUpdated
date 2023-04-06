const Employees = require('../shema/Employees.js')



class serviceEmployees {
    //    Добавлене нового сотрудника в бд
    async add(EmployeesData) {
        const keys = Object.keys(EmployeesData);
        const number = keys.length;
        const EmployeesKeys = Object.keys(Employees.schema.obj);
        if (number != EmployeesKeys.length) {
            return "Отсутствует поле"
        }
        for (let key in EmployeesData) {
            if (EmployeesData[key] == null || EmployeesData[key] === '') {
                return "Поле, или несколько полей не заполнены"
            }
        }
        const result = await Employees.create(EmployeesData);
        return { message: "Успешно", result }
    }

    //    Получение списка всех сотрудников из бд
    async getAll() {
        return await Employees.find();
    }

    //    Получение списка всех найденных сотрудников из бд
    async find(query) {
        const result = await Employees.find(query)
        if (result == "") {
            return "Не найдено"
        }
        return { message: "Найдено", result }
    }
    //    Редактирование сотрудников
    async update(EmployeesData) {
        if (!EmployeesData._id) {
            return "ID не указан"
        }
        const result = await Employees.findByIdAndUpdate(EmployeesData._id, EmployeesData, { new: true });
        if (!result) {
            return "ID не найден"
        }
        const keys = Object.keys(EmployeesData);
        const number = keys.length;
        const EmployeesKeys = Object.keys(Employees.schema.obj);
        if (number - 1 != EmployeesKeys.length) {
            return "Не заполнены поля"
        }
        return "Успешно"
    }

    //    Удаление сотрудника из БД
    async delete(id) {
        const result = await Employees.findByIdAndDelete(id)
        if (!result) {
            return "ID не найден"
        }
        return "Успешно"
    }
}
module.exports = new serviceEmployees();