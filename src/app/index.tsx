import React from 'react';
import './index.scss';
import withStore from 'app/providers/withStore';
import Pages from 'pages';

const App = () => <Pages />;

export default withStore(App);
