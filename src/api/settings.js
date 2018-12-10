const API = 'http://localhost:3000/settings';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
};

export function getProfile(userId) {
  return fetch(`${API}/profile?userId=${userId}`, {
    method: 'GET',
    headers,
  });
}

