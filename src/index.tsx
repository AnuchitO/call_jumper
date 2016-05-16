import * as React from 'react';
import * as ReactDom from 'react-dom';

import Hello from './Hello';

ReactDom.render(
  <Hello name="Willson" />,
  document.getElementById('app')
);
