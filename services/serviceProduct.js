const Product = require('../shema/Product.js')



class serviceProduct {

    //    Добавлене новой товара в бд
    async add(productData) {
        return await Product.create(productData);
    }

    //    Получение списка всех товаров из бд
    async getAll() {
        return await Product.find();
    }

    //    Получение списка всех найденных товаров из бд
    async search(query) {
        return (await Product.find(query))
    }
    //    редактирование товара
    async update(productData) {
        await Product.findByIdAndUpdate(productData._id, productData, { new: true });
    }

    //    Удаление товара из БД
    async delete(id) {
        await Product.findByIdAndDelete(id)
    }
}
module.exports = new serviceProduct();