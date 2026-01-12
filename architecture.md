sequenceDiagram
    participant User as 👤 Usuario
    participant AI as 🤖 AI Agent (Host)
    participant MCP as 🧠 MCP Server
    participant Meli as 🛍️ Mercado Libre API
    participant MP as 💳 Mercado Pago API

    User->>AI: "Busca una laptop que pueda pagar"
    AI->>MCP: Query: {search: 'laptop', context: 'balance'}
    rect rgb(240, 240, 240)
        par Check APIs
            MCP->>MP: Get User Balance/Credit
            MCP->>Meli: Search Products
        end
    end
    MCP-->>AI: Resultados filtrados por presupuesto
    AI->>User: "Encontré esta opción que se ajusta a tu saldo"
    User->>AI: "Comprar ahora"
    AI->>MCP: Init Payment Preference
    MCP->>MP: Create Checkout Link
    MP-->>User: Confirmación Biométrica / Pago
# System Architecture: AI-Powered Mercado Libre & Mercado Pago Integration

This document outlines the architectural design and data flow of the **MCP Server** that integrates Mercado Libre's marketplace with the Mercado Pago financial ecosystem.

## 🏗️ High-Level Architecture

The system follows a modular architecture where the **MCP Server** acts as a standardized bridge between Large Language Models (LLMs) and the Mercado ecosystem APIs.



### Components:
1.  **AI Host (Client):** Any MCP-compatible environment (like Claude Desktop or a custom AI agent).
2.  **MCP Server:** The middleware that translates natural language intent into structured API calls.
3.  **Mercado Libre API:** Provides real-time product data, ratings, and shipping information.
4.  **Mercado Pago API:** Handles wallet balance queries, payment processing, and transaction security.

---

## 🔄 Data Flow (Step-by-Step)

1.  **Intent Recognition:** The user asks: *"Can I afford those Bose headphones I saw on Meli?"*
2.  **Context Fetching (MP):** The AI agent calls the MCP Server to check the user's **Mercado Pago balance** or available credit (Mercado Crédito).
3.  **Marketplace Query (ML):** Simultaneously, the MCP Server searches **Mercado Libre** for the specific product, filtering by "Full" shipping and high seller reputation.
4.  **Reasoning & Match:** The AI compares the price + shipping cost against the user's financial context.
5.  **Secure Handshake:** If the user decides to buy, the MCP Server generates a **Mercado Pago Checkout Pro** preference, ensuring the transaction is secure and encrypted.

---

## 🔒 Security & Privacy

Security is our top priority at Mercado Pago. This architecture implements:

* **OAuth 2.0:** Secure authentication for both Mercado Libre and Mercado Pago.
* **Scoped Permissions:** The MCP Server only requests "read-only" access for searching and "write" access only when a payment is explicitly authorized by the user.
* **Credential Masking:** Sensitive tokens are managed via environment variables and are never exposed to the LLM's training data.

---

## 🛠️ Tech Stack Specifics

* **Protocol:** Model Context Protocol (JSON-RPC over Standard I/O or HTTP).
* **Language:** Node.js / TypeScript for robust type-safety in financial operations.
* **Concurrency:** Handles multiple API requests in parallel to reduce latency in AI responses.

---

## 🚀 Scalability Goals

The architecture is designed to eventually support:
* **Webhooks:** To notify the AI agent when a shipment status changes in Mercado Libre.
* **Multi-Account Support:** Seamlessly switching between personal and business Mercado Pago accounts.
