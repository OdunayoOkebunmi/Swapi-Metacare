import { Router } from 'express';
import { createComment, getAllComments, getOneComment } from '../../controller/comment.controller';

const router = Router();
router.post('/:id', createComment);
router.get('/', getAllComments);
router.get('/:id', getOneComment);
export default router;
