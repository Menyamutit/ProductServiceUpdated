const ProductsProcesses = require('../shema/ProductsProcesses.js')



class serviceProductsProcesses {
    //    Добавлене нового продукта в бд
    async add(ProductsProcessesData) {
        const keys = Object.keys(ProductsProcessesData);
        const number = keys.length;
        const ProductsProcessesKeys = Object.keys(ProductsProcesses.schema.obj);
        if (number != ProductsProcessesKeys.length) {
            return "Отсутствует поле"
        }
        for (let key in ProductsProcessesData) {
            if (ProductsProcessesData[key] == null || ProductsProcessesData[key] === '') {
                return "Поле, или несколько полей не заполнены"
            }
        }
        const result = await ProductsProcesses.create(ProductsProcessesData);
        return { message: "Успешно", result }
    }

    //    Получение списка всех продуктв из бд
    async getAll() {
        return await ProductsProcesses.find();
    }

    //    Получение списка всех найденных продуктов из бд
    async find(query) {
        const result = await ProductsProcesses.find(query)
        if (result == "") {
            return "Не найдено"
        }
        return { message: "Найдено", result }
    }
    //    Редактирование продуктов
    async update(ProductsProcessesData) {
        if (!ProductsProcessesData._id) {
            return "ID не указан"
        }
        const result = await ProductsProcesses.findByIdAndUpdate(ProductsProcessesData._id, ProductsProcessesData, { new: true });
        if (!result) {
            return "ID не найден"
        }
        const keys = Object.keys(ProductsProcessesData);
        const number = keys.length;
        const ProductsProcessesKeys = Object.keys(ProductsProcesses.schema.obj);
        console.log(number);
        console.log(ProductsProcessesKeys.length);
        if (number - 1 != ProductsProcessesKeys.length) {
            return "Не заполнены поля"
        }
        return "Успешно"
    }

    //    Удаление продукта из БД
    async delete(id) {
        const result = await ProductsProcesses.findByIdAndDelete(id)
        if (!result) {
            return "ID не найден"
        }
        return "Успешно"
    }
}
module.exports = new serviceProductsProcesses();