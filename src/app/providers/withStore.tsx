import React from 'react';
import { Provider } from 'react-redux';
import store from 'app/store';

const withStore = (App: React.ElementType) => () =>
  (
    <Provider store={store}>
      <App />
    </Provider>
  );

export default withStore;
