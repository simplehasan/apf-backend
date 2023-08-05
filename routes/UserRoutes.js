import express from 'express';
import { createNewUser, getUser } from '../controllers/UserController.js';


const router = express.Router();


// create
router.post("/", createNewUser);
// read
router.get("/:id", getUser);
// update
router.patch("/:id");
// delete
router.delete("/:id");

export default router;