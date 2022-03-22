import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCard extends Component {
  // executes when the component is mounted/loaded/starts

  constructor(props) {
    // console.log("constructor -shoppingcart");
    super(props);
    // here you must initialize state
    this.state = {
      products: [
        {
          id: 1,
          name: "First Product",
          price: 1200,
          quantity: 1,
          photo:
            "https://avatars.mds.yandex.net/i?id=0a052bdaf6500a69770e0476d8431856-4271045-images-thumbs&n=13",
        },
        {
          id: 2,
          name: "Second Product",
          price: 800,
          quantity: 1,
          photo:
            "https://avatars.mds.yandex.net/i?id=b34107b9bb39f511664ad1524bbb6adf-5876503-images-thumbs&n=13",
        },
        {
          id: 3,
          name: "Third Product",
          price: 400,
          quantity: 1,
          photo:
            "https://avatars.mds.yandex.net/i?id=dd55782673764e4207021ca89a2a4ad0-5858549-images-thumbs&n=13",
        },
        {
          id: 4,
          name: "Fourth Product",
          price: 600,
          quantity: 1,
          photo:
            "https://avatars.mds.yandex.net/i?id=4e8567340467322c1e2bed70a43c477e-5877259-images-thumbs&n=13",
        },
        {
          id: 5,
          name: "Fifth Pro",
          price: 1500,
          quantity: 1,
          photo:
            "https://avatars.mds.yandex.net/i?id=fc2b530a97f68369d02a252b116d6525-4981525-images-thumbs&n=13",
        },
        {
          id: 6,
          name: "Sixth Pro",
          price: 2800,
          quantity: 1,
          photo:
            "https://avatars.mds.yandex.net/i?id=01236fddded3113a656196b271efca7f-5653759-images-thumbs&n=13",
        },
      ],
    };
  }

  render() {
    // console.log("render-shoppingcart");
    return (
      <div className="d-flex flex-column align-items-center">
        <h4 style={{ margin: "2rem auto" }}> Shopping Card</h4>

        <div
          className={
            this.state.products.length > 0
              ? "row row-cols-1 row-cols-md-3 g-4 d-flex justify-content-center"
              : ""
          }
        >
          {this.state.products.length > 0 ? (
            this.state.products?.map((prod) => (
              <Product
                key={prod.id}
                product={prod}
                id={prod.id}
                name={prod.name}
                price={prod.price}
                photo={prod.photo}
                qty={prod.quantity}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                handleDelete={this.handleDelete}
              >
                <a href="/#" className="btn btn-primary">
                  Buy Now
                </a>
              </Product>
            ))
          ) : (
            <h2>Card is empty!</h2>
          )}
        </div>
      </div>
    );
  }
  // executes after constructor and render method (includes life cycle of child components, if any) of current compound
  componentDidMount() {
    //   fetch Data from Data source
    // console.log("after render-compntdidmount");
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(
    //   "ComponentDidUpdate",
    //   prevProps,
    //   prevState,
    //   this.props,
    //   this.state
    // );
  }

  componentWillUnmount() {
    // console.log("comp will unmount");
  }

  handleIncrement = (product) => {
    let allProd = [...this.state.products];
    let index = allProd.indexOf(product);
    allProd[index].quantity++;

    this.setState({ products: allProd });
  };

  handleDecrement = (product) => {
    let allProd = [...this.state.products];
    let index = allProd.indexOf(product);

    if (allProd[index].quantity > 0) {
      allProd[index].quantity--;
    } else {
      return allProd[index].quantity;
    }
    this.setState({ products: allProd });
  };

  handleDelete = (product) => {
    let allProd = [...this.state.products];
    // let index = allProd.indexOf(product);

    if (window.confirm("Are you sure?")) {
      const filteredProd = allProd.filter((prod) => prod.id !== product.id);
      this.setState({ products: filteredProd });
    }
  };
}
