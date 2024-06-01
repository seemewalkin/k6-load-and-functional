# AlphaVantage API Testing

![GitHub Actions](https:/github.com/seemewalkin/payrails-take-home/actions/workflows/ci.yml/badge.svg)
[Results of CI runs](https://github.com/seemewalkin/payrails-take-home/actions)


## Description
This project is designed to test the AlphaVantage API's `GlobalQuote` function, which retrieves real-time price information about a specific stock symbol. Manual tests cover some positive, negative, and boundary test cases. There is also performance test for `GlobalQuote` function as well.

## Prerequisites
- Docker
- Docker Compose
- Node.js

## Manual Test Cases
Manual test cases for the AlphaVantage API can be found [here](./AlphaVantage_GlobalQuote_TestCases.md).

## Setup

1. Clone the repository:
    ```bash
    git clone <https://github.com/seemewalkin/payrails-take-home>
    cd <https://github.com/seemewalkin/payrails-take-home>
    ```

2. Set up environment variables:
    Create a `.env` file in the project root and add your environment variables:
    ```bash
    API_KEY=your_api_key_here
    ```

3. Configure the application:
    Ensure your `config.json` file is properly set up:
    ```json
    {
      "base_url": "https://www.alphavantage.co/query",
      "endpoints": {
        "time_series_daily": "TIME_SERIES_DAILY",
      }
    }
    ```

## Running Tests

### Functional Tests

To run functional tests:
```bash
docker-compose up k6-functional
```

### Load Tests

To run load tests:
```bash
docker-compose up k6-load
```

## Decision Making
I chose to use k6 for this project as a practice exercise, since I had never used k6 to verify functional tests before. Although k6 is primarily known for performance testing, it also provides a robust framework for functional testing. You can read more about using k6 for functional behavior testing [here](https://k6.io/docs/examples/tutorials/get-started-with-k6/test-for-functional-behavior/). This assignment was a great opportunity to explore k6's capabilities beyond its conventional use cases :)
