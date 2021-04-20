//This is not our current baseURL. It is just here as a place holder.*needs updated with new API
//baseURL will be https://subdued-fog-mouth.glitch.me for deployment
export const baseURL = "http://localhost:3001";

//Login Fetch Request *needs updated with new API

////Auction endpoints////
export const getAllAuctionIds = () =>
  fetch(`${baseURL}/auctions`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });

export const createAuction = (token, pet, endsAt) => {
  return fetch(`${baseURL}/auctions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token,
      pet,
      endsAt,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

export const checkAuctions = (id) =>
  fetch(`${baseURL}/auctions/${id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      return res;
    });

export const bidOnAuction = (token, amount, id) => {
  return fetch(`${baseURL}/auctions/${id}`, {
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

////Auth endpoints////
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
      console.log(res);
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

export const deleteAccount = (token, password) => {
  return fetch(`${baseURL}/auth/account`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
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

export const logoutRequest = (token) => {
  return fetch(`${baseURL}/auth/logout`, {
    method: "POST",
    headers: {
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

////Interactions endpoints////

////Pets endpoints////
export const getAllPetIds = () =>
  fetch(`${baseURL}/pets`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });

export const checkPet = (id) =>
  fetch(`${baseURL}/pets/${id}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });

export const createPet = (
  token,
  name,
  imageFile,
  cuddly,
  lazy,
  hungry,
  playful,
  loyal
) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const formData = new FormData();
      formData.append("token", token);
      formData.append("name", name);
      formData.append("pictureData", event.target.result);
      formData.append("cuddly", cuddly);
      formData.append("lazy", lazy);
      formData.append("hungry", hungry);
      formData.append("playful", playful);
      formData.append("loyal", loyal);

      fetch(`${baseURL}/admin/pet`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((json) => resolve(json));
    };
    fileReader.readAsDataURL(imageFile);
  });
};

////Products endpoints////
export const getAllProductNames = () =>
  fetch(`${baseURL}/products`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });

export const getProductDetailsByName = (name) =>
  fetch(`${baseURL}/products/${name}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });

export const purchaseProductByName = (token, quality, name) => {
  return fetch(`${baseURL}/products/${name}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      token,
      quality,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};

////Admin only for (Products)////
export const createProduct = (
  token,
  name,
  imageFile,
  quality,
  category,
  price
) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.onload = (event) => {
      const formData = new FormData();
      formData.append("token", token);
      formData.append("name", name);
      formData.append("pictureData", event.target.result);
      formData.append("quality", quality);
      formData.append("category", category);
      formData.append("price", price);
      fetch(`${baseURL}/admin/pet`, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((json) => resolve(json));
    };
    fileReader.readAsDataURL(imageFile);
  });
};
////Users endpoints////

export const getAllUserIds = () =>
  fetch(`${baseURL}/users`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });

export const checkUser = (id) =>
  fetch(`${baseURL}/users/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({}),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
