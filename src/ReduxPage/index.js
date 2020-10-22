import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counter from './counter';

import B from './B';

const store = createStore(counter); // 儲存庫

export default function redux() {
  return (
    <Provider store={store}>
      <div>
        A
        <B />
      </div>
    </Provider>
  );
}
