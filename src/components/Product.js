import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <div className="card" style={{ width: "16rem", margin: "2rem" }}>
        <span
          style={{
            display: "flex",
            width: "48px",
            alignSelf: "flex-end",
            marginBottom: "4px",
          }}
        >
          <button
            onClick={() => this.props.handleDelete(this.props.product)}
            className="btn btn-danger"
          >
            X
          </button>
        </span>
        <img
          style={{ width: "100%", height: "150px" }}
          src={this.props.photo}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title"> {this.props.name} </h5>
          <p> {this.props.price} $ </p>
          <p className="card-text">
            lorem ipsum text lorem ipsum dolor sit amet, consectetur adip
          </p>
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row">
              <span className="badge  text-dark d-flex align-items-center">
                {this.props.qty}
              </span>
              <div>
                <button
                  onClick={() => this.props.onIncrement(this.props.product)}
                  className="shadow pr-2 bg-light border-0 btn btn-light "
                >
                  +
                </button>
                <button
                  onClick={() => this.props.onDecrement(this.props.product)}
                  className="shadow pr-2 bg-light border-0 btn btn-light"
                >
                  -
                </button>
              </div>
            </div>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }

  componentWillUnmount() {
    // console.log("comp will unmount-for Product");
  }
}

export default Product;
