const express = require("express")
const router  = express.Router()
const {addTask, getTasks, deleteTask} = require('../controller/app')

router.post("/task", addTask)
router.get("/task",getTasks)
router.delete("/task/:id",deleteTask)

module.exports = router;