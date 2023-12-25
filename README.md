# CORS Proxy

## Overview
This NodeJS app serves as a versatile CORS proxy server designed to facilitate secure communication between client-side applications and remote API endpoints. CORS-related challenges are addressed, enabling seamless cross-origin requests while providing error handling and detailed event logging for monitoring and debugging.

## Key Features

### HTTP Proxy Server
- Utilizes the 'http-proxy' library to create a robust proxy server capable of forwarding HTTP requests to a specified target URL.
- Comprehensive error handling to ensure a reliable and secure proxying process.

### CORS Middleware
- Implements CORS support through the 'cors' middleware.
- Configurable CORS options to allow or restrict cross-origin requests; default configuration allows requests from any origin ('*').

### Error Handling
- Gracefully handles errors that may occur during the proxying process.
- Sends informative error messages and appropriate HTTP status codes to the client in case of proxy-related issues.

### Proxy Event Logging
- Logs detailed events related to proxy requests and responses.
- Event listeners for both 'proxyReq' and 'proxyRes' events provide insights into the flow of data between the client and the target API.

### Configuration
- Defines a target URL ('http://example.com/api') as the destination for proxied requests.
- Configurable CORS options, allowing customization based on specific use cases.

### Usage
- Listens on port 3001 by default, accessible at http://localhost:3001.
- Ideal for scenarios where a client application, running in a browser, needs to interact with an API hosted on a different domain.

## Getting Started
1. Clone the repository.
2. Install dependencies: `npm install`.
3. Run the server: `npm start`.
4. Access the proxy server at http://localhost:3001.
