import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import HW from './HW4';

Enzyme.configure({ adapter: new Adapter() });

const cmEvent = {
  target: {
    name: 'cm',
    value: '165',
  }
};

const kgEvent = {
  target: {
    name: 'kg',
    value: '50',
  }
};

const eventObj = {
  cm: cmEvent,
  kg: kgEvent,
};

const itemList = ['cm', 'kg'];

test('should HW4', () => {
  const DOM = mount(<HW />);
  expect(DOM.debug()).toMatchSnapshot();
});

itemList.forEach(item => {
  test(`${item} should change`, () => {
    const DOM = mount(<HW />);
    DOM.find(`input[name="${item}"]`).simulate('change', eventObj[item]);
    expect(DOM.debug()).toMatchSnapshot();
  });
});

// test('height should change', () => {
//   const DOM = mount(<HW />);
//   DOM.find('input[name="cm"]').simulate('change', cmEvent);
//   expect(DOM.debug()).toMatchSnapshot();
// })

// test('weight should change', () => {
//   const DOM = mount(<HW />);
//   DOM.find('input[name="kg"]').simulate('change', kgEvent);
//   expect(DOM.debug()).toMatchSnapshot();
// })

test('should calculate', () => {
  const DOM = mount(<HW />);
  DOM.find('input[name="cm"]').simulate('change', cmEvent);
  DOM.find('input[name="kg"]').simulate('change', kgEvent);
  DOM.find('button').simulate('click');
  expect(DOM.debug()).toMatchSnapshot();
});

