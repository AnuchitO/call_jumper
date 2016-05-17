import * as React from 'react';
import * as $ from 'jquery';

export default class SignUp extends React.Component<{}, {}> {
  componentDidMount() {
    $('select').material_select();
  }

  render() {
    var formStyle = {
      maxWidth: 320,
      margin: 'auto'
    };

    return <div>
      <div className="section center-align">
        <h3 className="">Create New Account</h3>
      </div>
      <div className="section center-align" style={formStyle}>
        <div className="input-field">
          <input id="company" type="text" />
          <label for="company">Company Name</label>
        </div>
        <div className="input-field">
          <input id="name" type="text" />
          <label for="name">Your Name</label>
        </div>
        <div className="input-field">
          <input id="email" type="email" />
          <label for="email">Email</label>
        </div>
        <div className="input-field">
          <input id="password" type="password" />
          <label for="password">Password</label>
        </div>
        <div className="input-field">
          <input id="confirm-password" type="password" />
          <label for="confirm-password">Confirm Password</label>
        </div>
        <div className="input-field">
          <input id="credit-card-number" type="number" />
          <label for="credit-card-number">Credit Card Number</label>
        </div>
        <div className="row">
          <div className="input-field col s6">
            <select id="month">
              <option disabled selected>Choose month</option>
              <option>01</option>
              <option>02</option>
              <option>03</option>
              <option>04</option>
              <option>05</option>
              <option>07</option>
              <option>08</option>
              <option>09</option>
              <option>10</option>
              <option>11</option>
              <option>12</option>
            </select>
            <label>Month</label>
          </div>
          <div className="input-field col s6">
            <select id="year">
              <option disabled selected>Choose Year</option>
              <option>16</option>
              <option>17</option>
              <option>18</option>
              <option>19</option>
              <option>20</option>
            </select>
            <label>Year</label>
          </div>
        </div>
        <div className="input-field">
          <input id="security-cord" type="number" />
          <label for="security-cord">Security Cord</label>
        </div>
      </div>

      <div className="section center">
        <button className="waves-effect waves-light btn">Create New Account</button>
      </div>

    </div>;
  }
}
