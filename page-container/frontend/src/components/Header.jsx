import React from 'react';
import '../css/Header.css';
import HealthBanner from './HealthBanner.jsx';
import NavigationLinks from './NavigationLinks';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.hideHealthNotice = this.hideHealthNotice.bind(this);
  }
  hideHealthNotice(event) {
    document.getElementById('health-notice').style.display = 'none';
  }
  render() {
    console.log('rendering Header');
    return (
      <div key="Header">
        <HealthBanner />
        <NavigationLinks />
      </div>

    );
  }
}
export default Header;
