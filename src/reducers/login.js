const initialState = {
  viaLogin: localStorage.getItem("token")
};

const login = (state = initialState, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      localStorage.setItem("token", action.payload);
      return {
        ...state,
        viaLogin: action.payload,
      };

    case "USER_LOGOUT":
      localStorage.removeItem("token", action.payload);
      return {
        ...state,
        viaLogin: "",
      };

    default:
      return state;
  }
};
export default login;
