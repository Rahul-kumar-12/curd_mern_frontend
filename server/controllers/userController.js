import User from '../models/userModels.js';

export const createUser = async (req, res) => {

    try {
        const newUser = new User(req.body)
        const { email } = newUser
        const userExist = await User.findOne({ email })
        if (userExist) {
            return res.status(400).json({ message: "user allready exist" })
        }
        const saveData = await newUser.save()
        // res.status(200).json(saveData)
        res.status(200).json({ message: 'user created successfully' })
    } catch (error) {
        return res.status(500).json({ errorMessage: error.message })
    }

}

export const getAllUser = async (req, res) => {
    try {
        const userData = await User.find();

        if (!userData || userData.length === 0) {
            return res.status(404).json({ message: "user not found" })
        }
        res.status(200).json({ message: "user getting successfully", userData })
        // console.log(getUser)

    } catch (error) {
        return res.status(500).json({ errorMessage: error.message })

    }
}
export const getUserById = async (req, res) => {
    try {
        const id = req.params.id
        const userExist = await User.findById(id)

        if (!userExist) {
            return res.status(400).json({ message: "user id not found" })
        }
        res.status(200).json({ message: "user Updated by id successfully", userExist })

    } catch (error) {
        return res.status(500).json({ errorMessage: error.message })

    }

}
export const update = async (req, res) => {

    try {
        const id = req.params.id
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ message: "user not found" })
        }
        const updateData = await User.findByIdAndUpdate(id, req.body, {
            new: true
        })
        // res.status(200).json(updateData)
        res.status(200).json({ message: 'user update successfully' ,updateData})

    } catch (error) {
        return res.status(500).json({ errorMessage: error.message })

    }
}

export const Delete = async (req, res) => {
    try {
        const id = req.params.id;
        const userExist = await User.findById(id)
        if (!userExist) {
            return res.status(404).json({ message: "user not found" })
        }
        const userDelete = await User.findByIdAndDelete(id)
        res.status(200).json({ message: "user deleted successfully" })
    } catch (error) {
        return res.status(500).json({ errorMessage: error.message })

    }
}