const processesService = require('../services/serviceProcessesService.js')

class ProcessesServiceController {

    // Добавление
    async add(req, res) {
        try {
            return res.status(200).json(await processesService.add(req.body))
        } catch (e) {
            res.status(400).json({ error: e.message })
        }
    }
    // Получение
    async getAll(req, res) {
        try {
            return res.json(await processesService.getAll());
        } catch (e) {
            console.log(e);
        }
    }
    // Поиск
    async find(req, res) {
        try {
            const query = {};
            query[req.params.param] = req.params.value;
            const result = res.status(200).json(await processesService.find(query))
            res.status(200).json({ message: "Успешно", result })
        } catch (e) {
            console.log(e)
        }
    }
    // Редактирование
    async update(req, res) {
        try {
            return res.status(200).json(await processesService.update(req.body))
        } catch (e) {
            console.log(e);
        }
    }
    // Удаление
    async delete(req, res) {
        try {
            const { id } = req.params
            if (!id) {
                res.status(400).json("ID не указан")
            }
            res.status(200).json(await processesService.delete(id))
        } catch (e) {
            console.log(e);
        }
    }
}
module.exports = new ProcessesServiceController()

