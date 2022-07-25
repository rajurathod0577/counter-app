import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
  };

  hadleIncrement = (product) => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
        <button
          onClick={() => this.hadleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formateCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
