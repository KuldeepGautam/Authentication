import http from "./httpService";
// import { apiUrl } from "../config.json";

export async function login(username, password) {
  const apiEndpoint = `/verifyCredentials?username=${username}&password=${password}`;

  const { data } = await http.get(apiEndpoint);

  console.log(data);

  const response = data.response;
  if (response && response.responseStatus === "0") {
    sessionStorage.setItem("name", response.data.name);
    sessionStorage.setItem("username", username);
    sessionStorage.setItem("password", password);
  }
}

export default {
  login,
  // loginWithJwt,
  // getCurrentUser,
  // logout,
  // getJwt
};
