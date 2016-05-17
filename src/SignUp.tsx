import * as React from 'react';
import * as $ from 'jquery';

export default class SignUp extends React.Component<{}, {}> {
  componentDidMount() {
    $('select').material_select();
  }

  generateMonths() {
    var months = new Array();
    for (let i=1; i<=12; i++) {
      let label = ('00' + i).slice(-2);
      months.push(<option key={i} value={label}>{label}</option>);
    }
    return months;
  }

  generateYears() {
    var years = new Array();
    let currentYear = new Date().getFullYear();
    for (let i=0; i<5; i++) {
      let label = currentYear.toString().slice(-2);
      years.push(<option key={i} value={label}>{label}</option>);
      currentYear++;
    }
    return years;
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
            <select value="" id="month">
              <option value="" disabled>Choose month</option>
              { this.generateMonths() }
            </select>
            <label>Month</label>
          </div>
          <div className="input-field col s6">
            <select value="" id="year">
              <option value="" disabled>Choose Year</option>
              { this.generateYears() }
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
