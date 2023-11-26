import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div className="bg-dark  text-white ">
        <div className="container">
          <div className="row ">
            <div className="col-4">
              <h2 className="m-3 fs-5 align-middle">Start Bootrap</h2>
            </div>
            <div className="col-8 text-white">
              <ul className="m-3 ms-5  align-middle">
                <li className="d-inline me-3">
                  <a href=""></a>Home
                </li>
                <li className="d-inline me-3 text-gray text-secondary">
                  <a href=""></a>About
                </li>
                <li className="d-inline me-3 text-secondary">
                  <a href=""></a>Contact
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
