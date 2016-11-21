import './Timeline.sass'
import React, { Component } from 'react'
import moment from 'moment'
import Time from './Time'
import Inspect from './Inspect'
import HorizontalTimeline from './HorizontalTimeline'
import VerticalTimeline from './VerticalTimeline'

export default class Timeline extends Component {
  constructor(props){
    super(props)
    const events = this.props.events
    const { start, end } = getStartAndEndFromEvents(events)
    this.state = { start, end }
  }
  componentWillReceiveProps(newProps){
    const { start, end } = getStartAndEndFromEvents(newProps.events)
    this.setState({ start, end })
  }
  render(){
    const events = this.props.events
    return <div>
      <div>start: <Time time={this.state.start}/></div>
      <div>end: <Time time={this.state.end}/></div>
      <div>duration: {moment(this.state.start).from(moment(this.state.end), true)}</div>
      <HorizontalTimeline events={events} />
      <VerticalTimeline events={events} />
    </div>
  }
}

const getStartAndEndFromEvents = events => {
  if (events.length === 0) return {start: 0, end: 0}
  let start, end
  events.forEach(event => {
    console.log('??', event)
    start = start === undefined ? event.startedAt :
      event.startedAt < start ? event.startedAt : start

    end = end === undefined ? event.completedAt :
      event.completedAt > end ? event.completedAt : end
  })
  return { start, end }
}
