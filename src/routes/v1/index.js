import express from 'express';
import movieRoutes from './movies';

const router = express.Router();

router.use('/movies', movieRoutes);
export default router;
