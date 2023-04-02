const serviceProduct = require('../services/serviceProduct.js')

class ProductController {

    // Добавление
    async add(req, res) {
        try {
            const result = await serviceProduct.add(req.body)
            res.status(200).json({ message: "Добавлено", result })

        } catch (e) {
            console.log(e);
        }
    }
    // Получение
    async getAll(req, res) {
        try {
            return res.json(await serviceProduct.getAll());
        } catch (e) {
            console.log(e);
        }
    }

    // Поиск
    async search(req, res) {
        try {
            const query = {};
            query[req.params.param] = req.params.value;;
            const result = await serviceProduct.search(query)
            res.status(200).json({ message: "Найдено", result })
        } catch (e) {
            console.log(e)
        }
    }
    // Редактирование
    async update(req, res) {
        try {
            if (!req.body._id) {
                res.status(400).json({ message: "id не указан" })
            }
            await serviceProduct.update(req.body)
            res.status(200).json({ message: "Изменено" })
        } catch (e) {
            console.log(e);
        }

    }
    // Удаление
    async delete(req, res) {

        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json({ message: "id не указан" })
            }
            await serviceProduct.delete(id)

            res.status(200).json({ message: "Удалено" })
        } catch (e) {
            console.log(e);
        }
    }
}
module.exports = new ProductController()

