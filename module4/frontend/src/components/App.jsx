import React from 'react';
import Module4List from './Module4/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log('Rendering App');
    return (
      <div key="Module4">
        <Module4List />
      </div>
    );
  }
}
export default App;
