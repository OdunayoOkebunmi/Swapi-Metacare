import { Router } from 'express';
import { getMoviesSorted } from '../../controller/movies.controller';

const router = Router();
router.get('/', getMoviesSorted);

export default router;
