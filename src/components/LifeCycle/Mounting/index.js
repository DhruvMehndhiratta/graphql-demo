import React, { Component } from 'react';
import ChildComponent from './ChildComponent';
import Updating from  '../Updating'

class Mounting extends Component {
  constructor(props) {
    console.log('life cycle parent constructor', props)
    super(props);
    this.state = {
      name: 'Vishwas'
    }
  }

  static getDerivedStateFromProps(props, state) {
    // component state will be accessible
    console.log('life cycle parent getDerivedStateFromProps', props, state)
    // based on our own logic or props coming to the component we can return the new state and that will over ride the state
    if(state.name === 'Vishwas') return {...state, name: 'dhruv'}
  }

  componentDidMount() {
    console.log('life cycle parent componentDidMount')
  }
  render() {
    const { name } = this.state
    console.log('life cycle parent render function')
    return (
      <div>
        <h1>{name}</h1>
        Mounting
        <ChildComponent />
        <Updating />
      </div>
    )
  }
}
export default Mounting