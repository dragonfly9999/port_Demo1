import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="mt-5">
        <div className="p-5 bg-light">
        <h2 className="fw-bold fs-1">A warm welcome!</h2>
        <p className="p-3 px-5 fs-5">
          Bootstrap utility classes are used to create this jumbotron since the
          old component has been <br /> removed from the framework. Why create custom
          CSS when you can use utilities?
        </p>
        <button className="btn btn-success">Call to action</button>
        </div>
      </div>
    );
  }
}
