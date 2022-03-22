import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = { email: "", password: "", message: "" };
  }

  render() {
    // console.log(this.state.email);
    return (
      <div style={{ marginTop: "4rem" }}>
        <div className="d-flex flex-column align-items-center justify-content-center mb-20">
          <h2 style={{ marginBottom: "2rem" }}>Login</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={this.state.email}
                onChange={(e) => this.setState({ email: e.target.value })}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={this.state.password}
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={this.onLoginClick}
            >
              Login
            </button>
            {this.state.message}
          </form>
        </div>
      </div>
    );
  }

  onLoginClick = () => {
    console.log(this.state);
    if (
      this.state.email === "admin@test.com" &&
      this.state.password === "admin1234"
    ) {
      // success
      this.setState({
        message: <span className="text-success"> Successfully logged in </span>,
      });
    } else {
      // error
      this.setState({
        message: (
          <span className="text-danger"> Invalid login credentials! </span>
        ),
      });
    }
  };
}

export default Login;
