import { types } from "./actions";

const initialState = {
  allDeviceInfo: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.GET_DEVICE.SUCCESS:
      return {
        ...state,
        allDeviceInfo: action.payload,
      };
    default:
      return { ...state };
  }
};
