
const Router = require('express')
const ProductsController = require('../controller/ProductsController.js')
const EmployeesController = require('../controller/EmployeesController.js')
const ProcessesServiceController = require('../controller/ProcessesServiceController.js')
const ProductsProcessesController = require('../controller/ProductsProcessesController.js')
const PositionsController = require('../controller/PositionsController.js')
const ProcessesController = require('../controller/ProcessesController.js')
const StorageFFController = require('../controller/StorageFFController.js')

const router = new Router()
// ProductsProcesses
router.post("/productsprocesses/add", ProductsProcessesController.add)
router.get("/productsprocesses/all", ProductsProcessesController.getAll)
router.get('/productsprocesses/find/:param/:value', ProductsProcessesController.find);
router.put("/productsprocesses/update", ProductsProcessesController.update)
router.delete("/productsprocesses/delete/:id", ProductsProcessesController.delete)
// ProcessesService
router.post("/processesservice/add", ProcessesServiceController.add)
router.get("/processesservice/all", ProcessesServiceController.getAll)
router.get('/processesservice/find/:param/:value', ProcessesServiceController.find);
router.put("/processesservice/update", ProcessesServiceController.update)
router.delete("/processesservice/delete/:id", ProcessesServiceController.delete)
// Employees
router.post("/employees/add", EmployeesController.add)
router.get("/employees/all", EmployeesController.getAll)
router.get('/employees/find/:param/:value', EmployeesController.find);
router.put("/employees/update", EmployeesController.update)
router.delete("/employees/delete/:id", EmployeesController.delete)
// Products
router.post("/products/add", ProductsController.add)
router.get("/products/all", ProductsController.getAll)
router.get('/products/find/:param/:value', ProductsController.find);
router.put("/products/update", ProductsController.update)
router.delete("/products/delete/:id", ProductsController.delete)
// Positions
router.post("/positions/add", PositionsController.add)
router.get("/positions/all", PositionsController.getAll)
router.get('/positions/find/:param/:value', PositionsController.find);
router.put("/positions/update", PositionsController.update)
router.delete("/positions/delete/:id", PositionsController.delete)
// Processes
router.post("/processes/add", ProcessesController.add)
router.get("/processes/all", ProcessesController.getAll)
router.get('/processes/find/:param/:value', ProcessesController.find);
router.put("/processes/update", ProcessesController.update)
router.delete("/processes/delete/:id", ProcessesController.delete)
// StorageFF
router.post("/storageff/add", StorageFFController.add)
router.get("/storageff/all", StorageFFController.getAll)
router.get('/storageff/find/:param/:value', StorageFFController.find);
router.put("/storageff/update", StorageFFController.update)
router.delete("/storageff/+delete/:id", StorageFFController.delete)


module.exports = router