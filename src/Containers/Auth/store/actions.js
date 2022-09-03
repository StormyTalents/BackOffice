import actionCreator from "../../../utils/actionCreator.js";

const SignInActionTypes = ["SIGN_IN", "FETCH_USER", "LOG_OUT"];

export const { types, actions } = actionCreator(SignInActionTypes);
