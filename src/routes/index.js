import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TempNavigation from '../components/global/temp_navigation';

import MockPlt from '../routes/MockPlt'
import AdminDashboard from '../routes/AdminDashboard'
import UserDashboard from '../routes/UserDashboard'

const GlobalHeader = () => {
  return(
    <header>
      <nav>
        Routes:
        <TempNavigation />
      </nav>
    </header>
  )
}

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalHeader />
      
      <Switch>
          <Route path="/mock-plt">
            <MockPlt />
          </Route>

          <Route path="/user-dashboard">
            <UserDashboard />
          </Route>

          <Route path="/admin-dashboard">
            <AdminDashboard />
          </Route>

          <Route path="/">
            <Home />
          </Route>

        </Switch>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <div className="page-content">
      <h2>Home</h2>

      Some content here about this web app      
    </div>
  );
}

export default Router