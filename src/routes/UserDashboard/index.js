import React from 'react'

import Heading from '../../components/global/Header'

const UserDashboard = () => {
  return (
    <div className="page-content user-dashboard">
      <Heading type="1" text="User Dashboard route" />

      <p>This page will display some PLT user facing components</p>

      <hr />

      <Heading type="2" text="Components" />

    </div>
  )
}

export default UserDashboard