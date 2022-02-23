import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AutoGrid } from '../.';

import './index.css';

const App = () => {
  return (
    <div style={{ maxWidth: 1600, margin: 'auto' }}>
      <AutoGrid
        minChildWidth={{
          base: 4,
        }}
      >
        <div className="child" />
        <div className="child" />
        <div className="child" />
        <div className="child" />
      </AutoGrid>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
