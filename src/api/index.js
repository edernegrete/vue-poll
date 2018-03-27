export default function request(baseUrl, method, payload) {
  const url = baseUrl;
  const body = payload ? JSON.stringify(payload) : null;
  return fetch(url, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method,
    body,
  }).then(res => res.json(), (err) => {
    Promise.reject(err);
  })
    .then(data => data, (err) => {
      Promise.reject(err);
    });
}
