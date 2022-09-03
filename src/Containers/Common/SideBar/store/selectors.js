import { createSelector } from "reselect";

const selectViewMachineIdState = (state) => state.viewMachineReducer;

export const getViewMachineId = () =>
  createSelector(selectViewMachineIdState, (state) => state.machineId);
