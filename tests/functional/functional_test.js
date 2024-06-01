import http from 'k6/http';
import { group } from 'k6';
import { checkResponseStatus, checkResponseContains, checkResponseContainsProperty, checkResponseDoesNotContain } from '../helpers/check_helpers.js';
import { sendGetRequest, buildUrl } from '../helpers/request_helpers.js';

const config = JSON.parse(open('/app/tests/config/config.json'));

const API_KEY = __ENV.API_KEY;
const BASE_URL = config.base_url;
const ENDPOINTS = config.endpoints;

export default function () {
  group('Functional Tests', function () {
    group('GLOBAL_QUOTE - Success', function () {
      const params = { apikey: API_KEY, symbol: 'IBM' };
      const url = buildUrl(BASE_URL, ENDPOINTS.global_quote, params);
      const res = sendGetRequest(url);
      console.log('Success response:', res.body);
      checkResponseStatus(res, 200);
      checkResponseContains(res, 'Global Quote');
      checkResponseContainsProperty(res, '01. symbol');
    });

    group('GLOBAL_QUOTE - Invalid Symbol', function () {
      const params = { apikey: API_KEY, symbol: 'INVALID_SYMBOL' };
      const url = buildUrl(BASE_URL, ENDPOINTS.global_quote, params);
      const res = sendGetRequest(url);
      console.log('Invalid Symbol response:', res.body);
      checkResponseStatus(res, 200);
      checkResponseContains(res, 'Global Quote');
      checkResponseDoesNotContain(res, '01. symbol');
    });
  });
}
