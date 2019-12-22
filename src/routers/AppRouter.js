import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginPage from "../components/LoginPage";
import WelcomePage from "../components/WelcomePage";
import DashboardPage from "../components/Dashboard";
import NotFoundPage from "../components/NotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import { AuthProvider } from "../components/AuthContext";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <AuthProvider>
        <Switch>
          <Route path="/" component={WelcomePage} exact={true} />
          <Route path="/login" component={LoginPage} exact={true} />
          <ProtectedRoute
            path="/dashboard"
            component={DashboardPage}
            exact={true}
          />
          <Route component={NotFoundPage} />
        </Switch>
      </AuthProvider>
    </div>
  </BrowserRouter>
);

export default AppRouter;
