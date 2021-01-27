import React from 'react';
import List from './List.jsx';
import styles from './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div key="Module4">
        <List />
      </div>
    );
  }
}
export default App;
