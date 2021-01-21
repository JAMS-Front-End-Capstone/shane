import React from 'react';
import Question from './Question.jsx';
class QuestionList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendering Component_QuestionList');
    return (
      <div className="Component_QuestionList">
        <Question />
      </div>
    );
  }
}
export default QuestionList;
