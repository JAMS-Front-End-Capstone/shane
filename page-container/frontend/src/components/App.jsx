import React from 'react';
import '../css/App.css';
import Header from './Header.jsx';
import AdvertisingBanner from './AdvertisingBanner.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log('Rendering App');
    return (
      <span id="Component_App">
        <Header />
        <AdvertisingBanner />
        <div className="main">
          <div className="page">

          </div>
          <div className="page-divider"></div>

        </div>
        <Footer />
      </span>
    );
  }
}
export default App;
