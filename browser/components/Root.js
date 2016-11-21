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
        this.setState({events})
      })
  }

  render(){
    return <div>
      <Timeline events={this.state.events} />
    </div>
  }
}
