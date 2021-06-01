import http from "./httpService";

const apiEndpoint = "/users";

function register(user) {
  return http.post(apiEndpoint, {
    email: user.username,
    password: user.password,
    name: user.name,
  });
}

function update(user) {
  return http.put(apiEndpoint, {
    name: user.name,
    email: user.username,
    mobileNumber: user.mobileNumber,
  });
}

const userService = {
  register,
  update,
};

export default userService;
