import { MercadoPagoConfig } from 'mercadopago';
import dotenv from 'dotenv';

dotenv.config();

// Initialize the Mercado Pago client with your Access Token
const client = new MercadoPagoConfig({ 
    accessToken: process.env.MP_ACCESS_TOKEN,
    options: { timeout: 5000 } 
});

export default client;
