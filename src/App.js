import React from 'react';
import './App.css';

import CountdownClock from './countdownClock';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleFormat = this.handleFormat.bind(this);
  }

  handleFormat(datetime) {
    let days = Math.floor((new Date(datetime).getTime())/(1000 * 60 * 60 * 24)); // Milliseconds to Days
    let hours = new Date(datetime).getHours(); // Hours
    let minutes = new Date(datetime).getMinutes(); // Minutes
    let seconds = new Date(datetime).getSeconds(); // And seconds...
    return days + ' days, ' + hours + ' hrs, ' + minutes + ' minutes, ' + seconds + ' seconds';
  }

  render() {
    return (
      <div className="App">
        <h3>New Years Countdown 2021 PST</h3>
        <CountdownClock format={this.handleFormat} />
      </div>
    );
  }
}

export default App;
