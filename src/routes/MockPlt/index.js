import React from 'react'

import Heading from '../../components/global/Header'
import Messenger from '../../components/mockPlt/messenger'
import Notification from '../../components/mockPlt/notifications'
import Carousel from '../../components/mockPlt/carousel'

const MockPlt = () => {
  return (
    <div className="page-content mock-plt">
      <Heading type="1" text="Mock PLT route" />

      <p>This page will display some PLT user facing components</p>

      <hr /> 

      <Heading type="2" text="Components" />

      <Heading type="3" text="Messenger" />

      <Messenger />

      <Heading type="3" text="Notifications" />

      <Notification />

      <Heading type="3" text="Carousel" />

      <Carousel />
    </div>
  )
}

export default MockPlt