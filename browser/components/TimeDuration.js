import React, { Component } from 'react'
import moment from 'moment'

export default class TimeDuration extends Component {

  static propTypes = {
    from: React.PropTypes.number.isRequired,
    to: React.PropTypes.number.isRequired,
  }

  render(){
    const time = moment(this.props.from).from(moment(this.props.to), true)
    return <span className="TimeDuration">{time}</span>
  }

}
