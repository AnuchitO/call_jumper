import * as React from 'react';
import {shallow} from 'enzyme';

import SignUp from '../src/SignUp';

describe('SignUp', () => {
  it('shows 12 months in month options plus default label', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper.find('#month select option').length).toBe(13);
  });

  it('shows 5 years in year options plus default label', () => {
    const wrapper = shallow(<SignUp />);
    expect(wrapper.find('#year select option').length).toBe(6);
  });

  it('5 year options should represent 5 years from now in last 2 digit format', () => {
    const wrapper = shallow(<SignUp />);
    let currentYear = new Date().getFullYear();
    expect(wrapper.find('#year select').childAt(1).text()).toBe(currentYear.toString().slice(-2));
    expect(wrapper.find('#year select').childAt(2).text()).toBe((currentYear + 1).toString().slice(-2));
    expect(wrapper.find('#year select').childAt(3).text()).toBe((currentYear + 2).toString().slice(-2));
    expect(wrapper.find('#year select').childAt(4).text()).toBe((currentYear + 3).toString().slice(-2));
    expect(wrapper.find('#year select').childAt(5).text()).toBe((currentYear + 4).toString().slice(-2));
  });
});
