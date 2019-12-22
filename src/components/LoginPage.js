import React from "react";
import Header from "./Header";
import { AuthConsumer } from "./AuthContext";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginAction = this.handleLoginAction.bind(this);
    this.validateLoginForm = this.validateLoginForm.bind(this);
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
      return true;
    }
    return false;
  }

  handleLoginAction(event, login) {
    console.log('hete');
    if (this.state.isLoggedIn === false) {
      event.preventDefault();
      if (this.validateLoginForm(event)) {
        console.log("here");
        //const loginObject = fetch(`http://3c127295.ngrock.io/login`);
        if (true) {
          this.setState({
            isLoggedIn: true
          });
          sessionStorage.setItem("isAuth", true);
          login();
          this.props.history.push("/dashboard");
        }
      }
    }
  }

  componentDidMount() {
    console.log('chech');
    if(sessionStorage.getItem('isAuth') === "true") {
      console.log('here');
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <AuthConsumer>
        {({ isAuth, login, logout }) => (
          <div>
            <Header title={"Login Page"} />
            <div>
              <form onSubmit={
                (event) => {
                  console.log(login);
                  this.handleLoginAction(event, login)} 
                  } >
                <label>Username:</label>
                <br />
                <input type="text" name="username" />
                <br />
                <label>Password:</label>
                <br />
                <input type="password" name="password" />
                <br />
                <button type="submit"> Login </button>
              </form>
            </div>
          </div>
        )}
      </AuthConsumer>
    );
  }
}
export default LoginPage;
