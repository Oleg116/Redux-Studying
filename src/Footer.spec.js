import { shallow } from 'enzyme';
import React from 'react';
import Footer from './Footer';

it('test', () => {
  const component = shallow(<Footer />);
  const wrapper = component.find('div');
  expect(wrapper.length).toBe(1);
});
