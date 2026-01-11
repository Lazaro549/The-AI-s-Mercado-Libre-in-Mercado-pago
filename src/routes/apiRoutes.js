import { Router } from 'express';
import { handleChat } from '../controllers/chatController.js';
import { handleWebhook } from '../controllers/paymentController.js';

const router = Router();

// Route for AI Chat interaction
router.post('/chat', handleChat);

// Route for Mercado Pago Webhooks
router.post('/webhook', handleWebhook);

export default router;
