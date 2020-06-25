var intialState = {
	tweets: null,
	activeCategory: "ALL",
};

function tweets(state = intialState, action) {
	switch (action.type) {
		case "FETCH_TWEETS":
			return {
				...state,
				tweets: action.payload,
			};
		case "CHANGE_CATEGORY": {
			return {
				...state,
				activeCategory: action.payload,
			};
		}
		default:
			return state;
	}
}

export default tweets;
