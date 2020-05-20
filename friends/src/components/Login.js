import React from "react";
// import Axios from "axios";
import "../assets/styles/Login.css";
import { withRouter } from "react-router";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class Login extends React.Component {
  state = {
    credentials: {
      username: "Lambda School",
      password: "i<3Lambd4",
    },
  };

  changeHandle = (e) => {
    this.setState({
      credentials: {
        [e.target.name]: e.target.value,
      },
    });
  };

  login = (e) => {
    e.preventDefault();
    // console.log(this.props.history);
    axiosWithAuth()
      .post("http://localhost:5000/api/login", this.state.credentials)
      .then((res) => {
        console.log(res);
        window.localStorage.setItem("token", res.data.payload);
        this.props.history.push("/protected");
        console.log(this.props);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    return (
      <section className="login-container">
        <form className="login-form" onSubmit={this.login}>
          <label htmlFor="username">Username</label>
          <input
            className="login-input"
            type="text"
            name="username"
            value={this.state.credentials.username}
            onChange={this.changeHandle}
          />
          <label htmlFor="password">Password</label>
          <input
            className="login-input"
            type="password"
            name="password"
            value={this.state.credentials.password}
            onChange={this.changeHandle}
          />
          <button>Sign in</button>
        </form>
      </section>
    );
  }
}

export default withRouter(Login);
