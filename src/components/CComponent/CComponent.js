import React from "react";

class CComponent extends React.Component {
  state = {
    message: "Class Component",
    time: new Date().toString(),
  };

  componentDidMount() {
    console.log("I am from DidMount!");
    this.interval = setInterval(this.showDate, 1000);
  }

  componentDidUpdate() {
    console.log("I am from  Update!");
  }
  componentWillUnmount() {
    console.log("I am from WillUnmount!");
    clearInterval(this.interval);
  }

  showDate = () => {
    this.setState({ time: new Date().toString() });
  };
  render() {
    return (
      <div>
        {this.state.message} <div>{this.state.time}</div>
      </div>
    );
  }
}

export default CComponent;
