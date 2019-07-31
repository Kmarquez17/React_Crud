import decode from "jwt-decode";

export default class AuthService {
  constructor(domain) {
    this.domain = domain || "http://localhost:3000/api";
  }

  login = (email, password) => {
    return this.requestFetch("/usuario/login", {
      method: "POST",
      body: JSON.stringify({ email, password })
    }).then(response => {      
      if (response.message) {
        alert(response.message);
      } else {
        this.setToken(response.token);
        this.setUser(response.user);
      }

      // this.setToken(response.token);
      // this.setUser(response.user);

      return Promise.resolve(response);
    });
  };

  //Se verifica si el usuario esta ya en sesión
  isLoggedIn = () => {
    return !!this.getToken();
  };

  //Se asigna el token al navegador
  setToken = token => {
    localStorage.setItem("token_id", token);
  };

  //Sacamos el token del navegador
  getToken = () => {
    return localStorage.getItem("token_id");
  };

  setUser = userJSON => {
    localStorage.setItem("user", JSON.stringify(userJSON));
  };

  getUser = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  getUserAccess = () => {
    let user = this.getUser();
    if (user) {
      return user.rol;
    } else {
      return false;
    }
  };

  getProfile = () => {
    return decode(this.getToken());
  };

  logout = () => {
    localStorage.removeItem("token_id");
    localStorage.removeItem("user");
  };

  requestFetch = (urlRelative, options) => {
    const headers = {
      Accept: "application/json",
      "Content-Type": "application/json"
    };

    if (this.isLoggedIn()) {
      headers["token"] = this.getToken();
    }

    return fetch(this.domain + urlRelative, {
      headers,
      ...options
    })
      .then(response => response.json())
      .catch(error => Promise.reject(error));
  }
}

// petFetch(method, endpoint, body) {
//   try {
//     const query = await fetch(`${endpoint}`, {
//       method,
//       body: body && JSON.stringify(body),
//       headers: {
//         Accept: 'application/json',
//         'content-type': 'application/json',
//       },
//     });
//     const response = await query.json();
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// }
