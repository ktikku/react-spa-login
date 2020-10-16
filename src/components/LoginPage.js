import React from "react";
import Header from "./Header";
import { AuthConsumer } from "./AuthContext";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginAction = this.handleLoginAction.bind(this);
    this.validateLoginForm = this.validateLoginForm.bind(this);
    this.cancelLoginAction = this.cancelLoginAction.bind(this);
  }
  state = {
    isLoggedIn: false
  };

  validateCharacters(enteredValue) {
    if (
      enteredValue.indexOf("\\") > -1 ||
      enteredValue.indexOf("'") > -1 ||
      enteredValue.indexOf("/") > -1 ||
      enteredValue.indexOf(",") > -1 ||
      enteredValue.indexOf(".") > -1 ||
      enteredValue.indexOf("^") > -1 ||
      enteredValue.length === 0
    ) {
      return false;
    }
    return true;
  }
  validateLoginForm(e) {
    const enteredUsername = e.target[0].value;
    const enteredPassword = e.target[1].value;
    if (
      this.validateCharacters(enteredUsername) &&
      this.validateCharacters(enteredPassword)
    ) {
      if (enteredUsername === 'username' && enteredPassword === 'password') {
        return true;
      }
    }
    return false;
  }

  handleLoginAction(event, login) {
    if (this.state.isLoggedIn === false) {
      event.preventDefault();
      if (this.validateLoginForm(event)) {
        //const loginObject = fetch(`http://3c127295.ngrock.io/login`);
        console.log(event.target);
        if (true) {
          this.setState({
            isLoggedIn: true
          });
          sessionStorage.setItem("isAuth", true);
          login();
          this.props.history.push("/dashboard");
        }
      }
      else {
        alert(' \\ \'  / , . ^ are not allowed in username and password. Also, the length of password and username should be greater than zero.');
      }
    }
  }

  componentDidMount() {
    if (sessionStorage.getItem('isAuth') === "true") {
      this.props.history.push("/dashboard");
    }
  }

  cancelLoginAction() {
    this.props.history.push("/");
  }

  render() {
    return (
      <div style={{ flex: 1, backgroundColor: '#2fcc70', width: '100%', height: '100%', paddingBottom: 24, paddingTop: 12 }}>
        <AuthConsumer>
          {({ isAuth, login, logout }) => (
            <div style={{ flex: 1, backgroundColor: '#2fcc70', width: '100%', height: '100%' }}>
              <Header title={"Login Page"} style={{ fontSize: 14 }} />
              <div>
                <form onSubmit={
                  (event) => {
                    this.handleLoginAction(event, login)
                  }
                } >
                  <label>Username:</label>
                  <br />
                  <input type="text" name="username" style={{ borderRadius: 4, marginTop: 4, marginBottom: 12 }} />
                  <br />
                  <label>Password:</label>
                  <br />
                  <input type="password" name="password" style={{ borderRadius: 4, marginTop: 4, marginBottom: 12 }} />
                  <br />
                  <div style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8, marginBottom: 12 }}>
                    <button type="submit" style={{ marginRight: 12 }}> Login </button>
                    <button onClick={this.cancelLoginAction}>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </AuthConsumer>
      </div>
    );
  }
}
export default LoginPage;
