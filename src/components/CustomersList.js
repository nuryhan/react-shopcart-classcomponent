import React, { Component } from "react";

export default class CustomersList extends Component {
  state = {
    name: "Employees",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "John",
        phone: "123-456",
        photo: "https://picsum.photos/id/1010/60",
      },
      {
        id: 2,
        name: "Doe",
        phone: "103-456",
        photo: "https://picsum.photos/id/1011/60",
      },
      {
        id: 3,
        name: "Sarah",
        phone: "173-456",
        photo: "https://picsum.photos/id/1012/60",
      },
      {
        id: 4,
        name: "Potter",
        phone: "183-456",
        photo: "https://picsum.photos/id/1013/60",
      },
      {
        id: 5,
        name: "James",
        phone: null,
        photo: "https://picsum.photos/id/1014/60",
      },
    ],
  };

  render() {
    return (
      <div style={{ margin: "0 1rem" }}>
        <h4 className="border-bottom m-1 p-1">
          {this.state.name}
          <span className="badge bg-secondary m-2">
            {this.state.customersCount}
          </span>
          <button onClick={this.onRefreshClick} className="btn btn-info">
            Refresh
          </button>
        </h4>

        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {this.state.customers.map((cust, idx) => (
                <tr key={cust.id}>
                  <td> {cust.id} </td>
                  <td>
                    <img src={cust.photo} alt="customer" />
                    <div>
                      <button
                        onClick={() => {
                          this.onChangePicture(cust, idx);
                        }}
                        className="btn btn-sm btn-secondary"
                      >
                        change picture
                      </button>
                    </div>
                  </td>
                  <td
                    style={{
                      backgroundColor: cust.name.startsWith("S")
                        ? "green"
                        : "red",
                    }}
                  >
                    {cust.name}
                  </td>
                  <td>
                    {cust.phone === null ? (
                      <div className="bg-warning p-2">No Phone</div>
                    ) : (
                      cust.phone
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  onRefreshClick = () => {
    this.setState({
      customersCount: 7,
    });
  };

  onChangePicture = (cust, idx) => {
    let custArr = this.state.customers;
    custArr[idx].photo = "https://picsum.photos/id/1025/60 ";
    // console.log(this.state.customers[idx].photo);
    this.setState({ customers: custArr });
  };
}
