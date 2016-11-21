import './HorizontalTimeline.sass'
import React, { Component } from 'react'
import Inspect from './Inspect'
import percentageOfRange from '../util/percentageOfRange'

export default class HorizontalTimeline extends Component {
  static propTypes = {
    start:  React.PropTypes.number.isRequired,
    end:    React.PropTypes.number.isRequired,
    events: React.PropTypes.array.isRequired,
  }

  render(){
    const { events, start, end } = this.props

    const eventComponents = this.props.events.map( event =>
      <Event
        key={event.id}
        event={event}
        start={start}
        end={end}
      />
    )
    return <div className="HorizontalTimeline">
      <div className="HorizontalTimeline-viewport">
        <div className="HorizontalTimeline-stage">
          {eventComponents}
        </div>
      </div>
    </div>
  }
}

const Event = ({event, start, end}) => {



  const style = {
    left:  `${percentageOfRange(start, end, event.startedAt)}%`,
    right: `${100 - percentageOfRange(start, end, event.completedAt)}%`,
  }
  return <div className="HorizontalTimeline-Event" style={style}>
    <div className="HorizontalTimeline-Event-title">
      {event.title}
    </div>
  </div>
}
