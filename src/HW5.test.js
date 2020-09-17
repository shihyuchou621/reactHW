import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HW from './HW5';

Enzyme.configure({ adapter: new Adapter() });

test('value should change', () => {
  const DOM = mount(<HW />);
  DOM.find('input').simulate('change', {
    target: {
      name: 'inputValue',
      value: 'qwerty',
    }
  });
  expect(DOM.debug()).toMatchSnapshot();
});

test('should have list', () => {
  const DOM = mount(<HW />);
  DOM.find('input').simulate('change', {
    target: {
      name: 'inputValue',
      value: 'qwerty',
    }
  });
  DOM.find('form').simulate('submit');
  expect(DOM.debug()).toMatchSnapshot();
});

test('should have lists', () => {
  const DOM = mount(<HW />);
  DOM.find('input').simulate('change', {
    target: {
      name: 'inputValue',
      value: 'qwerty',
    }
  });
  DOM.find('form').simulate('submit');
  DOM.find('input').simulate('change', {
    target: {
      name: 'inputValue',
      value: 'zxcvbn',
    }
  });
  DOM.find('form').simulate('submit');
  expect(DOM.debug()).toMatchSnapshot();
});

test('should have blank in list', () => {
  const DOM = mount(<HW />);
  DOM.find('input').simulate('change', {
    target: {
      name: 'inputValue',
      value: 'qwerty',
    }
  });
  DOM.find('form').simulate('submit');
  DOM.find('input').simulate('change', {
    target: {
      name: 'inputValue',
      value: '',
    }
  });
  DOM.find('form').simulate('submit');
  expect(DOM.debug()).toMatchSnapshot();
});
