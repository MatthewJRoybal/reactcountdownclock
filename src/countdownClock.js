import React from 'react';

class CountdownClock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    setInterval(() =>  {
      const end = new Date("Jan 1, 2020 00:00:00").getTime(); // New Years date/time
      let now = new Date(); // Current date/time
      const offset = now.getTimezoneOffset() * 60 * 1000; // Timezone comes in minutes...convert to milliseconds
      now = now - offset; // now in local time
      const spread = end - now; // The different in local time between now and New Years
      this.setState({ count: spread });
    }, 1000)
  }

  render() {
    if (this.state.count === 0) {
      return <div>Wait for it...</div>;
    }
    return (
      <div>
        {this.props.format(this.state.count)}
      </div>
    );
  }
}

export default CountdownClock;
