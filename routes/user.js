import express from 'express'
import { getProfile, updateProfile, updateTargets } from '../controllers/userController.js'
import authMiddleware from '../middleware/auth.js'

const router = express.Router()

router.get('/profile', authMiddleware, getProfile)
router.put('/profile', authMiddleware, updateProfile)
router.put('/targets', authMiddleware, updateTargets)

export default router