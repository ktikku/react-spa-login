import React from "react";
import Header from "./Header";

class WelcomePage extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin() {
    this.props.history.push("/login");
  }
  render() {
    return (
      <div>
        <Header title={"Welcome Page"} />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default WelcomePage;
