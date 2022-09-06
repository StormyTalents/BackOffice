import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

import { getUser } from "../../Containers/Auth/store/selectors";
import { ROUTES } from "../constants";
import { getViewMachineId } from "../../Containers/Common/SideBar/store/selectors";
import { actions } from "../../Containers/Common/SideBar/store/";
import { useEffect } from "react";

export const PrivateRoute = ({
  component: RouteComponent,
  isAuthenticated,
}) => {
  let location = useLocation();

  const dispatch = useDispatch();
  const id = useSelector(getViewMachineId());

  useEffect(() => {
    if (id > 0) dispatch(actions.CLEAR_VIEW_MACHINE.REQUEST());
  }, [dispatch]);

  if (!isAuthenticated) {
    return <Navigate to={ROUTES.SIGN_IN} state={{ from: location }} />;
  }

  return <RouteComponent />;
};
