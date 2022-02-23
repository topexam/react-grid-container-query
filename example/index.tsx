import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AutoGrid, Grid, GridItem } from '../.';

import './index.css';

const App = () => {
  return (
    <div style={{ maxWidth: 1600, margin: '10rem auto' }}>
      <strong>Auto Grid</strong>
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
      <div style={{ height: '10rem' }} />
      <strong>Grid</strong>
      <Grid>
        <GridItem base={4}>
          <div className="child">base: 4</div>
        </GridItem>
        <GridItem base={4} md={8}>
          <div className="child">base: 4, md: 8</div>
        </GridItem>
        <GridItem xs={8} md={8}>
          <div className="child">xs: 8, md: 8</div>
        </GridItem>
      </Grid>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
