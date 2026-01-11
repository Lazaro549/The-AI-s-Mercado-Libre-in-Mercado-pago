import aiClient from '../config/aiConfig.js';

export const processMessageWithAI = async (userMessage) => {
    const prompt = `
        You are a shopping assistant. Extract items from the user's message.
        User message: "${userMessage}"
        Respond ONLY with a JSON object:
        {
            "textResponse": "A friendly message to the user",
            "items": [{"title": "item name", "quantity": 1, "unit_price": 100}]
        }
        If no products are found, "items" should be an empty array.
    `;

    const completion = await aiClient.chat.completions.create({
        messages: [{ role: "system", content: prompt }],
        model: "gpt-3.5-turbo",
    });

    return JSON.parse(completion.choices[0].message.content);
};
