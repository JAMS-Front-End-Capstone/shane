import React from 'react';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendering Component_Header');
    return (
      <span className="Component_Header">
        <p>Header!</p>
      </span>
    );
  }
}
export default Header;
