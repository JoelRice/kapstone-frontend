//This is not our current baseURL. It is just here as a place holder.*needs updated with new API
//baseURL will be https://subdued-fog-mouth.glitch.me for deployment
export const baseURL = "http://localhost:3000";

//Login Fetch Request *needs updated with new API

////Admin endpoints////
export const createProducts = (token, name, pictureData, quality) => {
  return fetch(`${baseURL}/admin/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token,
      name,
      pictureData,
      quality,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

////Auth endpoints////
export const loginRequest = (username, password) => {
  return fetch(`${baseURL}/auth/login`, {
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
  return fetch(`${baseURL}/auth/logout`, {
    method: "POST",
    headers: {
      // Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

export const createAccount = (username, password) => {
  return fetch(`${baseURL}/auth/account`, {
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
  return fetch(`${baseURL}/auth/account`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    // Authorization: `Bearer ${token}`,
    body: JSON.stringify({
      token,
      password,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

export const getAccountInfo = (token) =>
  fetch(`${baseURL}/auth/account`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });

export const updateAccountInfo = (token, password, newUsername, newPassword) =>
  fetch(`${baseURL}/auth/account`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token,
      password,
      newUsername,
      newPassword,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });

////Auction endpoints////

export const createAuction = (
  token,
  name,
  pictureData,
  traits,
  stats,
  endsAt
) => {
  return fetch(`${baseURL}/auth/account`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token,
      name,
      pictureData,
      traits,
      stats,
      endsAt,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

//"AUCTION_ID" is a placeholder
export const auctionBid = (token, amount) => {
  return fetch(`${baseURL}/auctions/${"AUCTION_ID"}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token,
      amount,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

////user endpoints////

////Pets endpoints////
