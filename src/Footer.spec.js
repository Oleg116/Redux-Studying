import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Footer from './Footer';
import { clearCompleted, setActiveFilter } from './store/counterData/actions';

configure({ adapter: new Adapter() });

const defaultFilterStates = ['All', 'Active', 'Completed'];
const footerWrap = shallow(<Footer
  state="All"
  clearCompleted={clearCompleted}
  defaultFilterStates={defaultFilterStates}
  setActiveFilter={setActiveFilter}
  uncompletedItemsCount={4}
/>);

test('Component should show 4 remaining items', () => {
  expect(footerWrap.find('p').text()).toBe('4 Items left');
});
// test('Buttons should change their classnames after click', () => {
//   console.log(footerWrap.find('#All').debug());
//   expect(footerWrap.find('#All').hasClass('LdBB3QbOueTN13y56rSK')).toBe(true);            //active (pressed) button
//   expect(footerWrap.find('#Active').hasClass('Orn5lCjulRFYlTc8NfCz')).toBe(true);         //default button
//   expect(footerWrap.find('#Completed').hasClass('Orn5lCjulRFYlTc8NfCz')).toBe(true);      //default button
// });
