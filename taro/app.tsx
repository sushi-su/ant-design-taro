import type { FC } from 'react';
import React, { Fragment } from 'react';
import './app.less';

const App: FC = ({ children }) => {
  return <Fragment key="app">{children}</Fragment>;
};

export default App;