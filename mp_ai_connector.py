import mercadopago
from typing import Dict, Any

class MercadoPagoAIAgent:
    """
    Bridge between Mercado Pago SDK and an AI Language Model.
    This class handles the financial logic that the AI will invoke.
    """
    
    def __init__(self, access_token: str):
        # Initialize the Mercado Pago SDK
        self.sdk = mercadopago.SDK(access_token)
        print("Mercado Pago AI Agent initialized successfully.")

    def create_payment_link(self, item_name: str, amount: float) -> str:
        """
        Generates a checkout link for a specific product and price.
        The AI will trigger this when the user says 'I want to sell X for $Y'.
        """
        preference_data = {
            "items": [
                {
                    "title": item_name,
                    "quantity": 1,
                    "unit_price": amount,
                    "currency_id": "ARS"  # You can change this to USD, MXN, BRL, etc.
                }
            ],
            "back_urls": {
                "success": "https://your-site.com/success",
                "failure": "https://your-site.com/failure"
            },
            "auto_return": "approved"
        }
        
        try:
            result = self.sdk.preference().create(preference_data)
            payment_url = result["response"]["init_point"]
            return f"Payment link created for {item_name}: {payment_url}"
        except Exception as e:
            return f"Error creating payment link: {str(e)}"

    def check_recent_transactions(self, limit: int = 5) -> Dict[str, Any]:
        """
        Retrieves the last N transactions from the account.
        The AI uses this to answer: 'How much did I spend today?'
        """
        filters = {
            "sort": "date_created",
            "criteria": "desc",
            "limit": limit
        }
        
        try:
            search_results = self.sdk.payment().search(filters)
            return search_results["response"]["results"]
        except Exception as e:
            return {"error": str(e)}

    def get_wallet_balance(self) -> str:
        """
        Fetches the current available balance in the account.
        Note: This usually requires specific API permissions.
        """
        # Conceptual placeholder as balance API has restricted access
        return "Feature: Balance retrieval requires Advanced Merchant tokens."

# --- Example of how the AI 'thinks' and calls this code ---
# User: "I sold a bike for 500 dollars, give me a link for the buyer."
# AI processes intent: 'create_payment_link'
# AI extracts entities: {item_name: "Bike", amount: 500}
