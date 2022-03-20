import { all } from "redux-saga/effects";

import { authSaga } from "../Containers/Auth/store/";
import { dashboardSaga } from "../Containers/Dashboard/store";
import { viewMachineSaga } from "../Containers/Common/SideBar/store";

export default function* rootSaga() {
  yield all([authSaga(), dashboardSaga(), viewMachineSaga()]);
}
