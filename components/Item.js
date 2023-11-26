import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="col-3">
        <div className="card ">
          <img src="./image/hinhYs.jpg" alt="" />
          <div className="card-body">
            <h5 className="card-title">Card Title</h5>
            <p className="card-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga
              asperiores porro libero consequuntur dicta repellendus obcaecati
              sunt tenetur eius laudantium.
            </p>
            <a href="" className="btn btn-primary">
              Find Out Mores
            </a>
          </div>
        </div>
      </div>
    );
  }
}
