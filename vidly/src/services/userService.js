// import http from "./httpService";
// import auth from "./authService";

// // const apiEndpoint = apiUrl + "/users";

// export function register(user) {
//   return http.post(apiEndpoint, {
//     email: user.username,
//     password: user.password,
//     name: user.name,
//   });
// }

// const user = auth.getCurrentUser();

// const username = user && user.username;
// const password = user && user.password;

// const apiEndpoint = `/users?username=${username}&password=${password}`;

// function userUrl(userId) {
//   return `${apiEndpoint}&userId=${userId}`;
// }

// export function getUsers(currentPage, pageSize) {
//   const serverUrl = `${apiEndpoint}&pageNumber=${currentPage}&pageSize=${pageSize}`;
//   return http.get(serverUrl);
// }

// export function getUser(userId) {
//   return http.get(userUrl(userId));
// }

// export function saveUser(user) {
//   if (user.userId) {
//     const body = { ...user };
//     delete body.userId;

//     return http.put(userUrl(user.userId), body);
//   }

//   return http.post(apiEndpoint, user);
// }
