// Backend server entry point for Advanced Intelligent Logistics Management System
import express from 'express';
import cors from 'cors';
import { config } from './config/index.js';
import { router } from './routes/index.js';

export const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

if (process.env.NODE_ENV !== 'test') {
  app.listen(config.port, () => {
    console.log(`[Advanced Logistics Backend] Server running on port ${config.port}`);
  });
}

export default app;
