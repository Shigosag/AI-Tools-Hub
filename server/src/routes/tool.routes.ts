import { Router } from 'express';
import { generateText } from '../controllers/tool.controller';

const router = Router();

router.post('/generate-text', generateText);

export default router;