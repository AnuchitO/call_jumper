import * as React from 'react';
import {shallow} from 'enzyme';

import Hello from '../src/Hello';

describe('Hello', () => {
  it('show hello with input name Aki', () => {
    const wrapper = shallow(<Hello name="Aki" />);
    expect(wrapper.text()).toBe('Hello, Aki');
  });

  it('show hello with input name Wilson', () => {
    const wrapper = shallow(<Hello name="Wilson" />);
    expect(wrapper.text()).toBe('Hello, Wilson');
  });
});
