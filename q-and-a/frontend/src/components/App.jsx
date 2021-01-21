import React from 'react';
import QuestionList from './QuestionList.jsx';
import Header from './Header.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendering App');
    return (
      <span className="Q-and-A">
        <Header />
        <QuestionList />
      </span>
    );
  }
}
export default App;
