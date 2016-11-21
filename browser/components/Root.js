import React, { Component } from 'react'
import Timeline from './Timeline'

export default class Root extends Component {
  constructor(props){
    super(props)
    this.state = {
      events: []
    }
    this.loadEvents()
  }

  loadEvents(){
    fetch('/api/events')
      .then( response => response.json())
      .then(events => {
        events.forEach(event => {
          event.startedAt = parseInt(event.startedAt, 10)
          event.completedAt = parseInt(event.completedAt, 10)
        })
        this.setState({events})
      })
  }

  render(){
    return <div>
      <div className="Navbar" />
      <Timeline events={this.state.events} />
    </div>
  }
}
