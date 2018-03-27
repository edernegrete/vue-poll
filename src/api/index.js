export default function request(baseUrl, method, payload) {
  const url = baseUrl;
  const body = payload ? JSON.stringify(payload) : {};
  return fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method,
    body,
  }).then(res => res.json()).then(data => data);
}
