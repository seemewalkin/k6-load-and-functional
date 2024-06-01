import http from 'k6/http';
import { check, group } from 'k6';
import { checkResponseStatus } from '../helpers/check_helpers.js';
import { buildUrl } from '../helpers/request_helpers.js';

const config = JSON.parse(open('/app/tests/config/config.json'));

const API_KEY = __ENV.API_KEY; 
const BASE_URL = config.base_url;
const ENDPOINTS = config.endpoints;

export let options = {
  stages: [
    { duration: '1m', target: 10 },  
    { duration: '3m', target: 50 },  
    { duration: '1m', target: 0 }, 
  ],
};

export default function () {
  group('Load Test for GLOBAL_QUOTE', function () {
    const params = { apikey: API_KEY, symbol: 'IBM' };
    const url = buildUrl(BASE_URL, ENDPOINTS.global_quote, params);
    const res = http.get(url);

    checkResponseStatus(res, 200);
    check(res, {
      'response time is less than 200ms': (r) => r.timings.duration < 200,
    });
  });
}
