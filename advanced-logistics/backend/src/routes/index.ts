// API routes registry stub providing only the Phase 0 health check
import { Router } from 'express';

export const router = Router();

router.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

export default router;
