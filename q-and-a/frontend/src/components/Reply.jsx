import React from 'react';
class Reply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendering Component_Reply');
    return (
      <span className="Component_Reply">
        <p>Reply!</p>
      </span>
    );
  }
}
export default Reply;
