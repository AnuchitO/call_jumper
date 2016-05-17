import * as React from 'react';

export default class SignIn extends React.Component<{}, {}> {
  render() {
    var formStyle = {
      maxWidth: 320,
      margin: 'auto'
    };

    return <div>
      <div className="section center-align">
        <h3>Welcome to Call Jumper</h3>
      </div>

      <div className="section center-align" style={formStyle}>
        <div className="input-field">
          <input id="email" type="email" />
          <label for="email">Email</label>
        </div>
        <div className="input-field">
          <input id="password" type="password" />
          <label for="password">Password</label>
        </div>
        <div className="input-field">
          <button className="waves-effect waves-light btn">Sign in</button>
        </div>
      </div>

      <div className="section center-align">
        <a href="#">Forget password?</a>
      </div>

      <div className="section center-align">
        <a className="waves-effect waves-light btn">Create New Account</a>
      </div>
    </div>;
  }
}
