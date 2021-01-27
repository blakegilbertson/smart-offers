import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import TempNavigation from '../components/global/temp_navigation';

import MockPlt from '../routes/MockPlt'
import AdminDashboard from '../routes/AdminDashboard'
import UserDashboard from '../routes/UserDashboard'

import Heading from '../components/global/heading';
import Button from '../components/global/button';

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
      <Heading type="1" text="Home" />

      Some components we can reuse:

      <Heading type="2" text="Components" />
      
      <Button id="testId"/>   
    </div>
  );
}

export default Router