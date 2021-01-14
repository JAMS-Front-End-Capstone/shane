const React = require('react');

class Module3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendering Module3');
    return (
      <div className="Module3" key="Module1">
        Module3 Stub
      </div>
    );
  }
}
export default Module3;
