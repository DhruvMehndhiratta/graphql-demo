import React from 'react';
import ChildComponent from './ChildComponent';

class Updating extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      age: 21
    }
  }

  static getDerivedStateFromProps(props, state) {
    /*
    - this is the very first method which get executed when everytime
    component is being re-rendered or state is updating
    */
   console.log('getDerivedStateFromProps updating phase parent' , state)
  }

  shouldComponentUpdate(nextProps, nextState) {
    /*
    - this method is the second method in re-render cycle
    - this receives the updated props and state in its argument and based on any logic
    we can speciy whether we want to update the state or not
    we can return true which is by default value returned to re-render the component
    if we return false it will not re-render the component but based on increment click it will increase the age
    everytime on every click but we will unable to see the same change in render if we return false and the reason it
    updated the state because it will always give nextstate and if we want to access the previous state we can use this.state here
    basically in this method we can compare the previous props/state with the upcoming props/state and return either
    true or false based on our requirement
    - it dictates whether the component needs re-render or not and used for performance optimization
    - not recommended to use setstate or side effects
    */
   console.log(nextProps, nextState, 'shouldComponentUpdate parent');
    return true;
  //  return false;
  }

  handleClick = () => {
    const { age } = this.state;
    this.setState({
      age: age + 1
    })
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log(prevProps, prevState, 'getSnapshotBeforeUpdate');
    return 1048; // scroll y position
    /**
     * called right before the changes from the virtual DOM are to be reflected in the DOM
     * its also a rarely used method and used in scenarios such as capture some information from the DOM
     * like scroll position and maintain the scroll position after performing some operation
     * this method should either return null or value
     * if we return value its value is accepted as third argument in the componentDidUpdate function which
     * executed just after it
     */
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState,snapshot, 'componentDidUpdate parent');
    /**
     * last function called in re-render cycle
     * called after the render is finished in the re-render cycles
     * it ensures that all the component has rendered properly
     * it accepts three arguments prevProps, prevstate, snapshot
     * snapshot value we can use to take the user to the same position of scroll as it was before re-render cycle
     */
  }

  render() {
    console.log('render function is the third function called in updating state parent');
    const { age } = this.state;
    return (
      <div>
        <p>{age}</p>
        <button onClick={this.handleClick}>Increment age</button>
        <h6>Updating phase</h6>
      </div>
    )
  }
}


export default Updating