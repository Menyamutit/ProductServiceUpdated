const Products = require('../shema/Products.js')



class serviceProducts {
    //    Добавлене новой товара в бд
    async add(ProductsData) {
        const keys = Object.keys(ProductsData);
        const number = keys.length;
        const ProductsKeys = Object.keys(Products.schema.obj);
        if (number != ProductsKeys.length) {
            return "Отсутствует поле"
        }
        for (let key in ProductsData) {
            if (ProductsData[key] == null || ProductsData[key] === '') {
                return "Поле, или несколько полей не заполнены"
            }
        }
        const result = await Products.create(ProductsData);
        return { message: "Успешно", result }
    }

    //    Получение списка всех товаров из бд
    async getAll() {
        return await Products.find();
    }

    //    Получение списка всех найденных товаров из бд
    async find(query) {
        const result = await Products.find(query)
        if (result == "") {
            return "Не найдено"
        }
        return { message: "Найдено", result }
    }
    //    редактирование товара
    async update(ProductsData) {
        if (!ProductsData._id) {
            return "ID не указан"
        }
        const result = await Products.findByIdAndUpdate(ProductsData._id, ProductsData, { new: true });
        if (!result) {
            return "ID не найден"
        }
        const keys = Object.keys(ProductsData);
        const number = keys.length;
        const ProductsKeys = Object.keys(Products.schema.obj);
        if (number - 1 != ProductsKeys.length) {
            return "Не заполнены поля"
        }
        return "Успешно"
    }

    //    Удаление товара из БД
    async delete(id) {
        const result = await Products.findByIdAndDelete(id)
        if (!result) {
            return "ID не найден"
        }
        return "Успешно"
    }
}
module.exports = new serviceProducts();