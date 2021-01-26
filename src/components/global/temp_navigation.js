import React from 'react'
import { Link } from "react-router-dom";

const TempNavigation = () => {
  return (
    <nav id="primary-nav">
      <ul className="primary-nav-list">
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
  )
}

export default TempNavigation