import User from "../models/User.js";
import bcrypt from 'bcryptjs';

// Create new user data
export const createNewUser = async (req, res) => {

    // hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // check nip and email
    const nipExist = await User.findOne({ nip: req.body.nip });
    const emailExist = await User.findOne({ email: req.body.email });
    if (nipExist) {
        return res.status(400).send({
            status: "error",
            message: "NIP sudah digunakan, mohon gunakan NIP lain."
        })
    }
    if (emailExist) {
        return res.status(400).send({
            status: "error",
            message: "Email sudah digunakan, mohon gunakan email lain."
        })
    }

    else {
        // creating new user
        const newUser = await new User({
            ...req.body,
            password: hashedPassword,
        });

        // saving new user
        try {
            let savedUser = await newUser.save();
            savedUser.email
                = savedUser.whatsapp
                = savedUser.password
                = savedUser.remember_token
                = undefined;


            res.status(201).json({
                status: "success",
                message: "User has been added successfully",
                data: savedUser,
            });
        } catch (err) {
            res.status(400).json({
                status: "error",
                message: err.message,
            });
        }
    }
}


export const getUser = async (req, res) => {
    res.send("This is users route");
}