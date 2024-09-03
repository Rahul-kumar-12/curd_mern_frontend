import express from 'express';
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import routers from './routes/userRoutes.js'
import cors from 'cors'

dotenv.config();
// .env file setup
const app = express();

// envirronment setup port and mongodb kaa
const PORT = process.env.PORT || 7000
const URI = process.env.URI
//  bodyParser is  moddleware 
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use('/api', routers)

try {
    mongoose.connect(URI)
    console.log('DB is connected successfully')

    app.listen(PORT, () => {
        console.log(`server is running localhost:${PORT}`)
    })
} catch (error) {
    console.log(error)
}


