import express from "express";
import { deleteUser, followUser, getAllUsers, getUser, UnFollowUser, updateUser } from "../Controllers/userContoller.js";
// import { deleteUser, followUser, getUser, UnFollowUser, updateUser } from "../Controllers/UserController.js";
// import { getUser } from "../Controllers/userContoller.js";

const router = express.Router();

router.get('/', getAllUsers)
router.get('/:id', getUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)
router.put('/:id/follow', followUser)
router.put('/:id/unfollow', UnFollowUser)
export default router;