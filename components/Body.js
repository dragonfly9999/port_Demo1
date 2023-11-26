import React, { Component } from "react";
import Banner from "./Banner";
import Item from "./Item";

export default class Body extends Component {
  render() {
    return (
      <div className="container mb-5">
        <div>
          <Banner />
        </div>
        <div className="row mt-5" >
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    );
  }
}
