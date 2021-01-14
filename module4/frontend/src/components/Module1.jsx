const React = require('react');

class Module1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendering Module1');
    return (
      <div className="Module1" key="Module1">
        Module1 Stub
      </div>
    );
  }
}
export default Module1;
