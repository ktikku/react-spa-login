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
      <div style={{ flex: 1, backgroundColor: '#2fcc70', width: '100%', height: '100%', paddingBottom: 24, paddingTop: 12 }}>
        <Header title={"Welcome Page"}  />
        <button onClick={this.handleLogin}>Login</button>
      </div>
    );
  }
}

export default WelcomePage;
