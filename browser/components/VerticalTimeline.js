import './VerticalTimeline.sass'
import React, { Component } from 'react'
import Inspect from './Inspect'

export default class VerticalTimeline extends Component {
  render(){
    const events = this.props.events.map( event =>
      <Event key={event.id} {...event} />
    )
    return <div className="VerticalTimeline">
      {events}
    </div>
  }
}

const Event = event =>
  <div><Inspect object={event} /></div>
