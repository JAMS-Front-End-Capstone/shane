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
        <link rel="stylesheet" href="/fonts.css"></link>
        <Header />
        <AdvertisingBanner />
        <div className="main">
          <div className="page">
            <div id="attraction-overview"></div>
            <div id="review"></div>
            <div id="q-and-a"></div>
            <div id="related"></div>
          </div>
          <div className="page-divider"></div>
        </div>
        <Footer />
      </span>
    );
  }
}
export default App;
