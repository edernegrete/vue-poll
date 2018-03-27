import request from './index';


export function getPoll(key) {
  return request(`https://vue-poll.herokuapp.com/questions/${key}`).then(res => res);
}

export function sendAnswers(data) {
  return request('https://vue-poll.herokuapp.com/answers', 'POST', data).then(res => res);
}

export function dashboard() {
  return request('https://vue-poll.herokuapp.com/todayAnswers').then(res => res);
}
