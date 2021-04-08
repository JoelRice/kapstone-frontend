//This is not our current baseURL. It is just here as a place holder.*needs updated with new API
//Will either be localhost:3000 or https://subdued-fog-mouth.glitch.me/
export const baseURL = "localhost:3000";

//Login Fetch Request *needs updated with new API
export const loginRequest = (username, password) => {
  return fetch(baseURL + "auth/login", {
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
//Logout Fetch Request *needs updated with new API
export const logoutRequest = (token) => {
  return fetch(baseURL + "auth/logout", {
    body: {
      token: token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};
