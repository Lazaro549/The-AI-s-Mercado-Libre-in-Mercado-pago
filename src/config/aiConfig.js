import { OpenAI } from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const aiClient = new OpenAI({
    apiKey: process.env.AI_API_KEY, // Your API Key from the provider
});

export default aiClient;
