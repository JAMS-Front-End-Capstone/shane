import React from 'react';
import Module1 from './Module1.jsx';
import Module2 from './Module2.jsx';
import Module3 from './Module3.jsx';
import Module4 from './Module4.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendering App');
    return (
      <div key="App">
        <Module1 />
        <Module2 />
        <Module3 />
        <Module4 />
      </div>
    );
  }
}
export default App;
