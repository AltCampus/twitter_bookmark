import axios from "axios";
const url = "http://localhost:3000/api/v1";

const setTokenToAxios = (token) => {
	axios.defaults.headers.common["authorization"] =
		token || localStorage["login-token"] || "";
};

setTokenToAxios();

const getTweets = (token) => {
	return async (dispatch) => {
		setTokenToAxios(token);
		try {
			let tweets = await axios.get(`${url}/tweets/`);
			dispatch({
				type: "FETCH_TWEETS",
				payload: tweets.data.tweets,
			});

			return tweets;
		} catch (error) {
			return error;
		}
	};
};

export default getTweets;
