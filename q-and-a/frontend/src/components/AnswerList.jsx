import React from 'react';
import Answer from './Answer.jsx';
class AnswerList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendering Component_AnswerList');
    return (
      <span className="Component_AnswerList">
        <Answer />
      </span>
    );
  }
}
export default AnswerList;
