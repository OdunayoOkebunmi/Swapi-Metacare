import { Router } from 'express';
import { getCharactersSorted } from '../../controller/characters.controller';

const router = Router();
router.get('/', getCharactersSorted);

export default router;
