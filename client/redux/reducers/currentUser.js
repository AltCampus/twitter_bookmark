var intialState = {
  userInfo: null,
  isAuthReqInProgress: false,
  failedToGetUser: false,
};

function currentUser(state = intialState, action) {
  switch (action.type) {
    case "FETCH_CURRENT_USER_START":
      return {
        ...state,
        isAuthReqInProgress: true,
      };
    case "FETCH_CURRENT_USER_SUCCESS":
      return {
        ...state,
        userInfo: action.payload,
        isAuthReqInProgress: false,
      };
    case "FETCH_CURRENT_USER_FAILED":
      return {
        ...state,
        userInfo: action.payload,
        isAuthReqInProgress: false,
        failedToGetUser: true,
      };
    default:
      return state;
  }
}

export default currentUser;
