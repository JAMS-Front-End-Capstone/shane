import React from 'react';
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendering Footer');
    return (
      <span id="Component_Footer" key="Footer">
        Footer
      </span>
    );
  }
}
export default Footer;
