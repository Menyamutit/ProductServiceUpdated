
const Router = require('express')
const ProductController = require('../controller/ProductController.js')

const router = new Router()
// запросы на сервер
router.post("/add", ProductController.add)
router.get("/all", ProductController.getAll)
router.get('/find/:param/:value', ProductController.search);
router.put("/update", ProductController.update)
router.delete("/delete/:id", ProductController.delete)

module.exports = router