import './HorizontalTimeline.sass'
import React, { Component } from 'react'
import Inspect from './Inspect'

export default class HorizontalTimeline extends Component {
  render(){
    const events = this.props.events.map( event =>
      <Event key={event.id} {...event} />
    )
    return <div className="HorizontalTimeline">
      <div className="HorizontalTimeline-viewport">
        <div className="HorizontalTimeline-stage">
          {events}
        </div>
      </div>
    </div>
  }
}

const Event = event =>
  <div className="HorizontalTimeline-Event">
    <div className="HorizontalTimeline-Event-duration" />

    {event.title}
  </div>
