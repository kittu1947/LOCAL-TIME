 import React from 'react'
 
export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div><center>
        <h1 style={{color:"green"}}>Hello, world!</h1>
        <h2>IST {this.state.date.toLocaleTimeString()}</h2>
        </center>
      </div>
    );
  }
}
