import express from 'express';

const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ message: "Hello! You're not supposed to be here ^^" })
})

export default router;