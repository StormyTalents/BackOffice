import { combineReducers } from "redux";

import { authReducer } from "../Containers/Auth/store";
import { LoaderReducer } from "../shared/Loader/store/reducer";
import { dashboardReducer } from "../Containers/Dashboard/store";
import { viewMachineReducer } from "../Containers/Common/SideBar/store";

export default () =>
  combineReducers({
    loader: LoaderReducer,
    authReducer,
    dashboardReducer,
    viewMachineReducer,
  });
