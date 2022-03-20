import { types } from "./actions";

const initialState = {
  machineId: -1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.VIEW_MACHINE.SUCCESS:
      return {
        ...state,
        machineId: action.payload,
      };
    case types.CLEAR_VIEW_MACHINE.SUCCESS:
      return {
        ...state,
        machineId: -1,
      };
    default:
      return { ...state };
  }
};
