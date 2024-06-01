import { check } from 'k6';

export function checkResponseStatus(response, expectedStatus) {
  check(response, {
    [`status is ${expectedStatus}`]: (r) => r.status === expectedStatus,
  });
}

export function checkResponseContains(response, key) {
  check(response, {
    [`response contains ${key}`]: (r) => r.body.includes(key),
  });
}

export function checkResponseContainsProperty(response, property) {
  const body = JSON.parse(response.body);
  check(body, {
    [`body contains ${property}`]: (obj) => obj['Global Quote'] && obj['Global Quote'][property] !== undefined,
  });
}

export function checkResponseDoesNotContain(response, key) {
  const body = JSON.parse(response.body);
  check(body, {
    [`body does not contain ${key}`]: (obj) => !obj['Global Quote'] || obj['Global Quote'][key] === undefined,
  });
}
