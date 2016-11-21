import React, { Component } from 'react'
import moment from 'moment'

const FORMATS = {
  long: "dddd, MMMM Do YYYY, h:mm:ss a",
}

export default class Time extends Component {

  static propTypes = {
    time: React.PropTypes.number.isRequired,
    format: React.PropTypes.string,
  }

  render(){
    const format = FORMATS[this.props.format] || FORMATS.long
    const time = moment(this.props.time).format(format)
    return <span className="Time">{time}</span>
  }

}
