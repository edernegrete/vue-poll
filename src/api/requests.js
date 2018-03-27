import request from './index';


export function getPoll(key) {
  return request(`http://localhost:9000/questions/${key}`).then(res => res);
}

export function sendAnswers(data) {
  return request('http://localhost:9000/answers', 'POST', data).then(res => res);
}

export function login(data) {
  return request('http://localhost:9000/auth', 'POST', data).then(res => res);
}

export function dashboard() {
  return request('http://localhost:9000/todayAnswers').then(res => res);
}
