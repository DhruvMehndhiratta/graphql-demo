import React, { Component } from 'react';

class ChildComponent extends Component {
  constructor(props) {
    console.log('life cycle child constructor', props)
    super(props);
    this.state = {
      name: 'Vishwas'
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('life cycle child getDerivedStateFromProps')
  }

  componentDidMount() {
    console.log('life cycle child componentDidMount')
  }
  render() {
    const { name } = this.state
    console.log('life cycle child render function')
    return (
      <div>
        <h1>{name}</h1>
        ChildComponent
      </div>
    )
  }
}
export default ChildComponent