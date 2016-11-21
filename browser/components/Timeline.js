import './Timeline.sass'
import React, { Component } from 'react'
import Time from './Time'
import TimeDuration from './TimeDuration'
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
    const { events } = this.props
    const { start, end } = this.state
    return <div>
      <div>start: <Time time={start}/></div>
      <div>end: <Time time={end}/></div>
      <div>duration: <TimeDuration from={start} to={end}/></div>
      <HorizontalTimeline
        start={start}
        end={end}
        events={events}
      />
      <VerticalTimeline events={events} />
    </div>
  }
}

const getStartAndEndFromEvents = events => {
  if (events.length === 0) return {start: 0, end: 0}
  let start, end
  events.forEach(event => {
    start = start === undefined ? event.startedAt :
      event.startedAt < start ? event.startedAt : start

    end = end === undefined ? event.completedAt :
      event.completedAt > end ? event.completedAt : end
  })

  const padding = ((end - start) / 100) * 5
  console.log({start, end, padding})
  start = start - padding
  end = end + padding
  return { start, end }
}
