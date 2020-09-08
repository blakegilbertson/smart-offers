import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import MockPlt from '../routes/MockPlt'
import AdminDashboard from '../routes/AdminDashboard'
import UserDashboard from '../routes/UserDashboard'

const GlobalHeader = () => {
  return(
    <header>
      <nav>
      Routes:
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mock-plt">Mock PLT</Link>
          </li>
          <li>
            <Link to="/user-dashboard">User Dashboard</Link>
          </li>
          <li>
            <Link to="/admin-dashboard">Admin Dashboard</Link>
          </li>
        </ul>
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