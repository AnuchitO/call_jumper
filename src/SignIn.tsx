import * as React from 'react';

export default class SignIn extends React.Component<any, any> {
  render() {
    return <div>
      <h1>Welcome to Call Jumper</h1>
      <div className="section">
        <div>
            <div className="input-field">
              <input id="email" type="email" />
              <label for="email">Email</label>
            </div>
            <div className="input-field">
              <input id="password" type="password" />
              <label for="password">Password</label>
            </div>
            <button className="waves-effect waves-light btn">Sign in</button>
        </div>
      </div>
    </div>;
  }
}
