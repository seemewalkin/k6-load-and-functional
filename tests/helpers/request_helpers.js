import http from 'k6/http';

export function sendGetRequest(url) {
  return http.get(url);
}

export function buildUrl(baseUrl, endpoint, params) {
  const queryString = Object.keys(params)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    .join('&');
  return `${baseUrl}?function=${endpoint}&${queryString}`;
}
