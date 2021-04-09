//This is not our current baseURL. It is just here as a place holder.*needs updated with new API
//Will either be localhost:3000 or https://subdued-fog-mouth.glitch.me/
export const baseURL = "localhost:3000";

//Login Fetch Request *needs updated with new API
export const loginRequest = (username, password) => {
  return fetch(`${baseURL}auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

export const logoutRequest = (token) => {
  return fetch(`${baseURL}auth/logout`, {
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

export const createAccount = (username, password) => {
  return fetch(`${baseURL}auth/account`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

export const deleteAccount = (token, password) => {
  return fetch(`${baseURL}users/${password}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};
