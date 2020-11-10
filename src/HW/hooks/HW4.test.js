import React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import HW from './HW4';


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
  const { container } = render(<HW />);
  expect(container).toMatchSnapshot();
});

itemList.forEach(item => {
  test(`${item} should change`, () => {
    const onChange = jest.fn(e => e.target.value);
    const { container, getByTestId } = render(
      <HW
        onChange={onChange}
      />
    );
    userEvent.type(getByTestId(item), eventObj[item].target.value);
    // console.log(eventObj[item].target.value);
    expect(container).toMatchSnapshot();
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
  const onChange = jest.fn(e => e.target.value);
  const { container, getByTestId } = render(
    <HW
      onChange={onChange}
    />
  );
  const button = container.querySelector('button');
  userEvent.type(getByTestId("cm"), eventObj.cm.target.value);
  userEvent.type(getByTestId("kg"), eventObj.kg.target.value);
  userEvent.click(button);
  expect(container).toMatchSnapshot();
});

