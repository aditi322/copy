# API Contract for Backend Handoff

This frontend is wired to stub functions in src/utils/api.js. Replace each stub with real FastAPI calls while preserving response shape.

## 1) fetchProducts
- Function: fetchProducts(filters = {})
- Endpoint: GET /products?category=&metal=&sort=
- Request body: none
- Response JSON:
```json
[
  {
    "id": "string",
    "slug": "string",
    "name": "string",
    "price": 25590,
    "category": "rings",
    "metal": "18kt rose gold",
    "images": ["https://...", "https://..."],
    "description": "string",
    "inStock": true,
    "rating": 4.8
  }
]
```

## 2) fetchProductById
- Function: fetchProductById(id)
- Endpoint: GET /products/{id}
- Path params: id (string)
- Response JSON:
```json
{
  "id": "string",
  "slug": "string",
  "name": "string",
  "price": 25590,
  "category": "rings",
  "metal": "18kt rose gold",
  "images": ["https://...", "https://..."],
  "description": "string",
  "inStock": true,
  "rating": 4.8
}
```

## 3) fetchProductBySlug
- Function: fetchProductBySlug(slug)
- Endpoint: GET /products/{slug}
- Path params: slug (string)
- Response JSON: same object shape as fetchProductById

## 4) fetchProductsByCategory
- Function: fetchProductsByCategory(categorySlug)
- Endpoint: GET /products?category={categorySlug}
- Query params: categorySlug (string)
- Response JSON: same array shape as fetchProducts

## 5) fetchRelatedProducts
- Function: fetchRelatedProducts(slug)
- Endpoint: GET /products?category={categorySlug}&limit=4
- Notes: frontend helper for related items using the current product category
- Response JSON: same array shape as fetchProducts

## 6) submitAddress
- Function: submitAddress(addressData)
- Endpoint: POST /checkout/address
- Request JSON:
```json
{
  "fullName": "string",
  "phone": "string",
  "addressLine1": "string",
  "addressLine2": "string",
  "city": "string",
  "state": "string",
  "pincode": "string"
}
```
- Response JSON:
```json
{
  "success": true,
  "addressId": "string"
}
```

## 7) placeOrder
- Function: placeOrder(orderData)
- Endpoint: POST /orders
- Request JSON:
```json
{
  "cartItems": [{ "id": "string", "quantity": 1 }],
  "addressId": "string",
  "paymentMethod": "upi"
}
```
- Response JSON:
```json
{
  "success": true,
  "orderId": "string",
  "status": "confirmed"
}
```

## 8) fetchCollectionNavigation
- Function: fetchCollectionNavigation()
- Endpoint: GET /products/navigation/collections
- Request body: none
- Response JSON:
```json
[
  { "name": "Rings", "slug": "rings" },
  { "name": "Earrings", "slug": "earrings" }
]
```

## 9) fetchFeaturedProductSlugs
- Function: fetchFeaturedProductSlugs()
- Endpoint: GET /products/featured
- Request body: none
- Response JSON:
```json
["aurora-petal-diamond-ring", "lotus-whisper-diamond-earrings"]
```

## 10) loginUser
- Function: loginUser(credentials)
- Endpoint: POST /auth/login
- Request JSON:
```json
{
  "email": "string",
  "password": "string",
  "rememberMe": true
}
```
- Response JSON:
```json
{
  "success": true,
  "user": {
    "id": "string",
    "fullName": "string",
    "email": "string"
  },
  "token": "string"
}
```

## 11) registerUser
- Function: registerUser(payload)
- Endpoint: POST /auth/register
- Request JSON:
```json
{
  "fullName": "string",
  "email": "string",
  "phone": "string",
  "password": "string"
}
```
- Response JSON:
```json
{
  "success": true,
  "userId": "string",
  "message": "string"
}
```

## 12) fetchAccountOverview
- Function: fetchAccountOverview(userId)
- Endpoint: GET /account/overview?userId={userId}
- Query params: userId (string)
- Response JSON:
```json
{
  "user": {
    "id": "string",
    "fullName": "string",
    "email": "string",
    "phone": "string"
  },
  "loyaltyTier": "Gold Circle",
  "points": 1840,
  "recentOrders": [
    {
      "id": "string",
      "date": "YYYY-MM-DD",
      "total": 25590,
      "status": "Delivered"
    }
  ],
  "savedAddresses": [
    {
      "id": "string",
      "label": "Home",
      "value": "string"
    }
  ]
}
```

## 13) fetchWhatsappConfig
- Function: fetchWhatsappConfig()
- Endpoint: GET /config/whatsapp
- Request params: none
- Response JSON:
```json
{
  "number": "8976824726",
  "name": "Jewellery Support",
  "status": "active"
}
```
- Purpose: Provides WhatsApp number for the chat widget visible on all pages
- Notes:
  - `number` should be in format without +91 prefix (e.g., "8976824726")
  - `status` can be "active" or "inactive" to control widget visibility
  - Widget is draggable and can be hidden by user; persists position in localStorage
  - When clicked, opens WhatsApp Web with pre-filled greeting message
