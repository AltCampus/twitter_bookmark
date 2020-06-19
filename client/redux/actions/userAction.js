import axios from "axios";
const url = "/api/v1";

const setTokenToAxios = (token) => {
  axios.defaults.headers.common["authorization"] =
    token || localStorage["login-token"] || "";
};

setTokenToAxios();

const getUserInfo = (token) => {
  return async (dispatch) => {
    // console.log("insideUpdateUser", data);
    setTokenToAxios(token);
    try {
      let user = await axios.get(`http://localhost:3000/api/v1/users/info`);
      // console.log(user.data);
      dispatch({
        type: "FETCH_CURRENT_USER_SUCCESS",
        payload: user.data.user,
      });

      return user;
    } catch (error) {
      return error;
    }
  };
};

export default getUserInfo;
