import express from 'express';
import cors from 'cors';
import apiRoutes from './routes/apiRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve your English frontend

// Routes
app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`Integration: AI + Mercado Pago active.`);
});
