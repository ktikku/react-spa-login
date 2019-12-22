import React from "react";


const AuthContext = React.createContext();

class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    if (typeof sessionStorage.getItem("isAuth") === "undefined") {
      sessionStorage.setItem("isAuth", "false");
    }
    this.state = { isAuth: sessionStorage.getItem("isAuth") };
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.isAuth !== this.state.isAuth)
      sessionStorage.setItem("isAuth", this.state.isAuth);
  }

  login() {
    console.log('in login');
    this.setState({ isAuth: "true" });
  }

  logout() {
    this.setState({ isAuth: "false" });
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          isAuth: this.state.isAuth,
          login: this.login,
          logout: this.logout
        }}
      >
        {" "}
        {console.log(this.state, sessionStorage)}
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}

const AuthConsumer = AuthContext.Consumer;

export { AuthProvider, AuthConsumer };
