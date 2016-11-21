import './Timeline.sass'
import React, { Component } from 'react'
import Inspect from './Inspect'

export default class Timeline extends Component {
  render(){
    const events = this.props.events.map( event =>
      <Event key={event.id} {...event} />
    )
    return <div>
      <h1>Timeline</h1>
      {events}
    </div>
  }
}

const Event = event =>
  <div><Inspect object={event} /></div>
