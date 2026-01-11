# The-AI-s-Mercado-Libre-in-Mercado-Pago
![mercado-pago-mcp png](https://github.com/user-attachments/assets/ae758721-8f18-4f62-bbb3-8de9ca7d5f1c)

An intelligent e-commerce assistant that uses AI to process natural language orders and converts them into secure **Mercado Pago** checkout links.

---

## 🌟 Key Features

* **Natural Language Processing:** Users can describe what they want to buy in plain text.
* **Automatic Order Creation:** AI extracts items, quantities, and prices automatically.
* **Secure Checkout:** Seamless integration with Mercado Pago SDK v2.
* **Scalable Architecture:** Clean code structure (Controllers, Services, Config).
* **Real-time Notifications:** Support for Webhooks to track payment status.

---

## 📁 Project Structure

The project follows a modular architecture in English for global standards:

```text
src/
├── config/         # SDK Initializations (MP & AI)
├── controllers/    # Route handlers
├── services/       # Business logic & AI Prompting
├── routes/         # API Endpoints
└── app.js          # Entry point
public/             # English UI Dashboard
    
