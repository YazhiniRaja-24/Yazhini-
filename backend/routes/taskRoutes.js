// const express= require('express')
// const router = express.Router()

// const{createTask,getTasks,getTaskById} = require('../controllers/taskControllers')
// const {protect} = require('../middleware/authmiddleware')

// router.post('/newTask',protect,createTask)
// router.get('/gettasks',protect,getTasks)
// router.get('/getTaskById/:id',protect,getTaskById)

// module.exports = router

const express=require('express')
const router=express.Router()
const {createTask,getTasks,getTaskById,updateTask,deleteTask,updateTaskPatch}=require('../controllers/taskControllers')
const {protect}=require('../middleware/authmiddleware')
router.post('/newTask',protect,createTask)
router.get('/getTasks',protect,getTasks)
router.get('/getTaskById/:id',protect,getTaskById)
router.put('/updateTask/:id',protect,updateTask)
router.patch('/updateTask/:id',protect,updateTask)
router.delete('/deleteTask/:id',protect,deleteTask)
module.exports=router