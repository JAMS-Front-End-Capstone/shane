import React from 'react';
class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendering Component_Answer');
    return (
      <span className="Component_Answer">
        <p>Answer!</p>
      </span>
    );
  }
}
export default Answer;
