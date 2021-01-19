import React from 'react';
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendering Footer');
    return (
      <div key="Footer">
        Footer
      </div>
    );
  }
}
export default Footer;
