import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import H3 from './HW3';

Enzyme.configure({ adapter: new Adapter() });

test('should HW3', () => {
  const DOM = renderer.create(<H3 />).toJSON();
  expect(DOM).toMatchSnapshot();
});

test('list should be sum of AS', () => {
  const DOM = mount(<H3 />);
  DOM.find('button').simulate('click');
  DOM.find('button').simulate('click');
  DOM.find('button').simulate('click');
  expect(DOM.debug()).toMatchSnapshot();
});


