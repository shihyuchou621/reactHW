import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import H2 from './HW2';

Enzyme.configure({ adapter: new Adapter() });

test('should HW2', () => {
  const DOM = renderer.create(<H2 />).toJSON();
  expect(DOM).toMatchSnapshot();
});

test('list should add 1 item', () => {
  const DOM = mount(<H2 />);
  DOM.find('button').simulate('click');
  expect(DOM.debug()).toMatchSnapshot();
});

test('list should add 4 item', () => {
  const DOM = mount(<H2 />);
  DOM.find('button').simulate('click');
  DOM.find('button').simulate('click');
  DOM.find('button').simulate('click');
  DOM.find('button').simulate('click');
  expect(DOM.debug()).toMatchSnapshot();
});
