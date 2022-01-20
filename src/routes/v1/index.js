import express from 'express';
import movieRoutes from './movies';
import characterRoutes from './characters';

const router = express.Router();

router.use('/movies', movieRoutes);
router.use('/characters', characterRoutes);
export default router;
