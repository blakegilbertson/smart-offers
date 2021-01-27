import React from 'react'
//import { Link } from 'react-router-dom';
import Anchor from '../../components/global/anchor'

import Heading from '../../components/global/Header'

const AdminDashboard = () => {
  return (
    <div className="page-content plt-dashboard">
      <Heading type="1" text="PLT Dashboard route" />

      <p>This page will display some PLT staff/admin facing components</p>

      <hr />

      <Heading type="2" text="Components" />

      Content here: 
      <ul>
        <li>Dashboard</li>
        <li>Ability to create/update carousels</li>
        <li>Ability to create/update offers</li>
        <il>Whatever else, see <Anchor href="https://trello.com/c/JsddV1Mp/18-%F0%9F%9B%8Dsmart-offers" text="Trello" /></il>
      </ul>
    </div>
  )
}

export default AdminDashboard