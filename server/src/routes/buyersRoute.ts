import express from 'express';
import { Register, verifyUserOTP } from '../controller/usersController';

const router = express.Router()

router.post('/signup', Register)
router.post('/verify', verifyUserOTP)

export default router;