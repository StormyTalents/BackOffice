/********* LIBS *********/
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

/************ Components ************/
import SignIn from "./Containers/Auth";
import Dashboard from "./Containers/Dashboard";
import Customers from "./Containers/Customers";
import Detectives from "./Containers/Detectives";
import Integrations from "./Containers/Integrations";
import Practices from "./Containers/Practices";
import { PrivateRoute, PublicRoute } from "./routes/containers";
import { getAuth } from "./Containers/Auth/store/selectors";
import Products from "./Containers/Machine";
import Orders from "./Containers/Machine/containers/Orders";
import Reports from "./Containers/Machine/containers/Reports";

/********  Vars and Env ********/
import { ROUTES, ROLES } from "./routes/constants";
import { PageWrapper, SideBar, PageContent } from "./Containers/Common";
import muiTheme from "./themes/muiTheme";
import "./styles/index.scss";

function App() {
  const isAuthenticated = useSelector(getAuth()); // from

  return (
    <MuiThemeProvider theme={muiTheme}>
      <Routes>
        <Route
          path={ROUTES.SIGN_IN}
          element={
            <PublicRoute
              component={SignIn}
              isAuthenticated={isAuthenticated}
              restricted={true}
            />
          }
        />
        <Route
          element={
            <PageWrapper>
              <SideBar />
              <PageContent>
                <Outlet />
              </PageContent>
            </PageWrapper>
          }
        >
          <Route
            path={ROUTES.DASHBOARD}
            element={
              <PrivateRoute
                isAuthenticated={isAuthenticated}
                component={Dashboard}
              />
            }
          />
          <Route
            path={ROUTES.CUSTOMERS}
            element={
              <PrivateRoute
                isAuthenticated={isAuthenticated}
                component={Customers}
              />
            }
          />
          <Route
            path={ROUTES.DETECTIVES}
            element={
              <PrivateRoute
                isAuthenticated={isAuthenticated}
                component={Detectives}
              />
            }
          />
          <Route
            path={ROUTES.INTEGRATION}
            element={
              <PrivateRoute
                isAuthenticated={isAuthenticated}
                component={Integrations}
              />
            }
          />
          <Route
            path={ROUTES.PRACTICES}
            element={
              <PrivateRoute
                isAuthenticated={isAuthenticated}
                component={Practices}
              />
            }
          />
          <Route path={ROUTES.PRODUCTS} element={<Outlet />}>
            <Route index element={<Products />} />
            <Route path={ROUTES.ORDERS} element={<Orders />} />
            <Route path={ROUTES.REPORT} element={<Reports />} />
          </Route>
          <Route
            path="*"
            element={
              isAuthenticated ? (
                <Navigate to={ROUTES.DASHBOARD} />
              ) : (
                <Navigate to={ROUTES.SIGN_IN} />
              )
            }
          />
        </Route>
      </Routes>
    </MuiThemeProvider>
  );
}

export default App;
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa;
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa;
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa;
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa;
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa;
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa;
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa;
aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa;
