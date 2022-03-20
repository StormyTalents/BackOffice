import { createSelector } from "reselect";

const selectDashboardState = (state) => state.dashboardReducer;

export const getAllDeviceInfo = () =>
  createSelector(selectDashboardState, (state) => state.allDeviceInfo);
