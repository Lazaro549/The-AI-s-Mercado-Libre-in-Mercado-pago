import { processMessageWithAI } from '../services/aiService.js';
import { createOrderPreference } from '../services/paymentService.js';

export const handleChat = async (req, res) => {
    try {
        const { message } = req.body;

        // 1. Send user input to AI to extract items
        const aiResponse = await processMessageWithAI(message);

        // 2. If the AI detects a purchase intent, create the MP link
        let checkoutUrl = null;
        if (aiResponse.items && aiResponse.items.length > 0) {
            checkoutUrl = await createOrderPreference(aiResponse.items);
        }

        res.json({
            reply: aiResponse.textResponse,
            checkoutUrl: checkoutUrl
        });
    } catch (error) {
        console.error('Error in ChatController:', error);
        res.status(500).json({ error: 'Failed to process request' });
    }
};
