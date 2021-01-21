import React from 'react';
import AnswerList from './AnswerList.jsx';
import Reply from './Reply.jsx';
class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendering Component_Question');
    return (
      <span className="Component_Question">
        <p>Question!</p>
        <AnswerList />
        <Reply />
      </span>
    );
  }
}
export default Question;
