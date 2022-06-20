import React from 'react';
import './index.scss';
import withStore from 'app/providers/withStore';

const App = () => <h1>Hello World</h1>;

export default withStore(App);
