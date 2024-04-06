// import jwtDecode from "jwt-decode";
import http from "./httpService";
<<<<<<< HEAD

// const apiEndpoint = `${apiUrl}/auth`;
// const tokenKey = "token";

// http.setJwt(getJwt());

export async function login(username, password) {
  const apiEndpoint = `/verifyCredentials?username=${username}&password=${password}`;

=======
// import { apiUrl } from "../config.json";

export async function login(username, password) {
  const apiEndpoint = `/verifyCredentials?username=${username}&password=${password}`;

>>>>>>> 7b65324f918bffbb03475c4f5a0472462733a231
  const { data } = await http.get(apiEndpoint);

  console.log(data);

  const response = data.response;
  if (response && response.responseStatus === "0") {
    sessionStorage.setItem("name", response.data.name);
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", password);
<<<<<<< HEAD
    // sessionStorage.setItem("customerId", response.data.customerId);
    // sessionStorage.setItem("customerName", response.data.customerName);
  }
}

// export function loginWithJwt(jwt) {
// localStorage.setItem(tokenKey, jwt);
// }

// export function getCurrentUser() {
//   // return { username: "admin", password: "system" };

//   try {
//     if (!sessionStorage.getItem("username")) return null;
//     return {
//       name: sessionStorage.getItem("name"),
//       username: sessionStorage.getItem("username"),
//       password: sessionStorage.getItem("password"),
// customerId: sessionStorage.getItem("customerId"),
// customerName: sessionStorage.getItem("customerName"),
//     };
//   } catch (ex) {
//     return null;
//   }
// }

// export function logout() {
//   sessionStorage.removeItem("username");
//   sessionStorage.removeItem("password");
// }

// export function getJwt() {
//   return localStorage.getItem(tokenKey);
// }

=======
  }
}

>>>>>>> 7b65324f918bffbb03475c4f5a0472462733a231
export default {
  login,
  // loginWithJwt,
  // getCurrentUser,
  // logout,
  // getJwt
};
