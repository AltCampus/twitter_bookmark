import axios from "axios";
const url = "http://localhost:3000/api/v1/users";

const setTokenToAxios = (token) => {
	axios.defaults.headers.common["authorization"] =
		token || localStorage["login-token"] || "";
};

setTokenToAxios();

const getUserInfo = (token) => {
	return async (dispatch) => {
		dispatch({ type: "FETCH_CURRENT_USER_START" });
		setTokenToAxios(token);
		try {
			let user = await axios.get(`${url}/info`);

			dispatch({
				type: "FETCH_CURRENT_USER_SUCCESS",
				payload: user.data.user,
			});

			return user;
		} catch (error) {
			dispatch({ type: "FETCH_CURRENT_USER_FAILED" });
			return error;
		}
	};
};

export default getUserInfo;
