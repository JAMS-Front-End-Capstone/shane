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
    console.log('rendering App');
    return (
      <div className="rebrand_2017">
        <Header />
        <div className="page">
          <AdvertisingBanner />
        body
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
