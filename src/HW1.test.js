import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import H1 from './HW1';

Enzyme.configure({ adapter: new Adapter() });

test('should HW1', () => {
  const component = renderer.create(<H1 />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('should simulate onClick event', () => {
  const DOM = mount(<H1 />);
  DOM.find('button').simulate('click');
  expect(DOM.debug()).toMatchSnapshot();
});
