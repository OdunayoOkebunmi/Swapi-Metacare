import express from 'express';
import movieRoutes from './movies';
import characterRoutes from './characters';
import commentRoutes from './comments';

const router = express.Router();

router.use('/movies', movieRoutes);
router.use('/characters', characterRoutes);
router.use('/comments', commentRoutes);
export default router;
