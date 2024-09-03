import express from 'express'
import { createUser, getAllUser, getUserById, update, Delete } from '../controllers/userController.js'
const routers = express.Router()
routers.post('/create', createUser)
routers.get('/get', getAllUser)
routers.get('/user/:id', getUserById)
routers.put('/update/:id', update)
routers.delete('/delete/:id', Delete)


export default routers