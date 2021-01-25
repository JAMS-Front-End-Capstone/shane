import React from 'react';
import '../css/Header.css';
import HealthBanner from './HealthBanner.jsx';
import NavigationLinks from './NavigationLinks';
import Navigation from './Navigation.jsx';
import NavigationDropdown from './NavigationDropdown.jsx';

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
    // console.log('Rendering Header');
    return (
      <span id="Component_Header">
        <link rel="stylesheet" href="/fonts.css"></link>

        <HealthBanner />
        <Navigation />
        <NavigationDropdown />
        <NavigationLinks />
      </span>
    );
  }
}
export default Header;
