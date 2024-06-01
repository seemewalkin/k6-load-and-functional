# Manual Test Cases for AlphaVantage API's GlobalQuote Endpoint

## Test Case 1 – Verify API Response with Valid Stock Symbol
**Description:** Ensure that the API returns correct stock data for a given valid stock symbol.  
**Preconditions:** Access to the API and a known valid stock symbol (e.g., "IBM").  
**Steps:**
1. Send a request to the GlobalQuote endpoint with the symbol "IBM".  
**Test Data:** Stock Symbol: `IBM`  
**Expected Outcome:** The API returns current stock data for IBM, including price, volume, and other relevant details.

## Test Case 2 – Verify API Handling of Invalid Stock Symbol
**Description:** Check that the API appropriately handles requests with an invalid stock symbol.  
**Preconditions:** Access to the API.  
**Steps:**
1. Send a request to the GlobalQuote endpoint with an invalid stock symbol (e.g., "INVALID_SYMBOL").  
**Test Data:** Stock Symbol: `INVALID_SYMBOL`  
**Expected Outcome:** The API returns an error message or an empty response, indicating that the stock symbol is invalid or not found.

## Test Case 3 – Verify API Handling of Invalid API Key
**Description:** Ensure the API correctly handles requests with an invalid API key.  
**Preconditions:** Access to the API and a known invalid or expired API key.  
**Steps:**
1. Replace the valid API key in the request with an invalid or expired key.  
2. Send a request to the GlobalQuote endpoint with a valid stock symbol (e.g., "IBM").  
**Test Data:** Stock Symbol: `IBM`  
**Expected Outcome:** The API returns an error response indicating the provided API key is invalid or expired.

## Test Case 4 – Verify API Response During Market Hours
**Description:** Validate that the API returns accurate stock data during market operating hours.  
**Preconditions:** Access to the API and it being market hours.  
**Steps:**
1. Send a request to the GlobalQuote endpoint during regular market hours.  
**Test Data:** Stock Symbol: `IBM` (or any other valid symbol).  
**Expected Outcome:** The API provides real-time stock data for the specified symbol, reflecting current market conditions.

## Test Case 5 – Verify API Response Under High Request Frequency
**Description:** Test the API's performance and response under high-frequency requests.  
**Preconditions:** Access to the API and the ability to send multiple simultaneous requests.  
**Steps:**
1. Rapidly send multiple requests to the GlobalQuote endpoint for the same or different stock symbols.  
**Test Data:** Multiple stock symbols or repeated requests.  
**Expected Outcome:** The API responds to each request without delays or errors, ensuring accurate and consistent data retrieval.

## Test Case 6 – Verify API Handling of Empty Stock Symbol
**Description:** Ensure that the API handles requests with an empty stock symbol correctly.  
**Preconditions:** Access to the API.  
**Steps:**
1. Send a request to the GlobalQuote endpoint with an empty stock symbol.  
**Test Data:** Stock Symbol: `""`  
**Expected Outcome:** The API returns an error message indicating the stock symbol parameter is missing or invalid.

## Test Case 7 – Verify API Response for Historical Stock Data
**Description:** Ensure that the API returns accurate historical stock data for a valid stock symbol.  
**Preconditions:** Access to the API and a known valid stock symbol (e.g., "MSFT").  
**Steps:**
1. Send a request to the TimeSeries endpoint with the symbol "MSFT" and parameters to retrieve historical data.  
**Test Data:** Stock Symbol: `MSFT`  
**Expected Outcome:** The API provides historical stock data for Microsoft Corporation, including daily open, high, low, close, and volume details.
