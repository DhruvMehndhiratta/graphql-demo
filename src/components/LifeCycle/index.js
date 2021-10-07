/***
 1) mounting state: constructor -> static getStaticDerivedStateFromProps -> render -> componentdidmount
 2) updating state: static getDerivedStateFromProps ->  shouldComponentUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate
 3) Un mounting: componentWillUnmount
 4) error handling: static getDerivedStateFromError -> componentDidCatch
 */


import React from 'react';

class LifeCycle extends React.Component {
  constructor(props){
    /*
    - this is the first thing of mounting state
    - perfect for initialization and binding the event handler for the class instance
    - do not use http calls inside it or side effects
    - super will call the base class constructor and then only we are being able to use the this.prop
      in the constructor to initialize the state with the props passed from parent component
    - this is the only place where we can directly overwrite the state by not using this.setState otherwise
      at all the places we need to use setstate to set the state of the component.
      */
    super(props);
    this.state ={

    }
  }

  getStaticDerivedStateFromProps(props, state) {
    /*
     - this is the second thing of mounting state
    this is the static method and in this we are not allowed to use this operator
    it is used in which our state depends on the props coming from the parent component and
    we can return the object based on either our comparision or logic and that object will over ride the state
    of the component and it has two arguments props which are coming from the parent component and the current state
    we shouldn't do any side effects like https calls
    */
  }

  componentDidMount() {
    /*
      - this is the forth thing of mounting state
      - invoked immediately after the render and called only one time for the whole lifecycle of the component time
      - invoked immediately after a component and all its children component has rendered into the DOM
      - perfect place to cause side effects like DOM manipulations or AJAX calls
    */
  }

  render() {
    /*
     - this is the third thing of mounting state
    render function and it is the require method
    in this we simple access this.props and this.state and return the JSX which simply define our UI
     it is a pure function for a given state and props it always expect to behave the same way
     do not change any state or modification with DOM or AJAX call
     - right after the render method of parent component the child component lifecycle methods get executed like did mount and all
    */
    return (
      <div>
        Life cycle
      </div>
    )
  }
}


export default LifeCycle;