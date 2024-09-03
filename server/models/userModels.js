// create model in our file 

import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({

    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    age: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true


    },
}, { timestamp: true })

const User = mongoose.model('User', userSchema)
export default User
