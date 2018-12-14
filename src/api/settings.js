const API = 'http://localhost:3000/settings';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
  'X-Requested-With': 'XMLHttpRequest',
};

export function getProfile(userId) {
  return fetch(`${API}/profiles/${userId}`, {
    method: 'GET',
    headers,
  });
}

export function updateProfile(userId, data) {
  return fetch(`${API}/profiles/${userId}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(data),
  });
}

export function getPreference(userId) {
  return fetch(`${API}/preferences/${userId}`, {
    method: 'GET',
    headers,
  });
}
