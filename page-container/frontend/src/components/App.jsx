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
      <span id="Component_App">
        <Header />
        <AdvertisingBanner />
        <div className="main">
          <div className="page">
            <p>
                ./node_modules/css-loader/dist/cjs.js!./frontend/src/css/App.css 1.54 KiB [built] [code generated]
                webpack 5.15.0 compiled successfully in 698 ms
                asset bundle.js 998 KiB [emitted] (name: main) 1 related asset
                cached modules 966 KiB [cached] 28 modules
                runtime modules 931 bytes 4 modules
                ./node_modules/css-loader/dist/cjs.js!./frontend/src/css/App.css 1.52 KiB [built] [code generated]
                webpack 5.15.0 compiled successfully in 648 ms
                asset bundle.js 997 KiB [emitted] (name: main) 1 related asset
                cached modules 966 KiB [cached] 28 modules
                runtime modules 931 bytes 4 modules
                ./node_modules/css-loader/dist/cjs.js!./frontend/src/css/App.css 1.48 KiB [built] [code generated]
                webpack 5.15.0 compiled successfully in 623 ms
                asset bundle.js 997 KiB [emitted] (name: main) 1 related asset
                cached modules 966 KiB [cached] 28 modules
                runtime modules 931 bytes 4 modules
                ./node_modules/css-loader/dist/cjs.js!./frontend/src/css/App.css 1.32 KiB [built] [code generated]
                webpack 5.15.0 compiled successfully in 548 ms
                asset bundle.js 997 KiB [emitted] (name: main) 1 related asset
                cached modules 966 KiB [cached] 28 modules
                runtime modules 931 bytes 4 modules
                ./node_modules/css-loader/dist/cjs.js!./frontend/src/css/App.css 1.48 KiB [built] [code generated]
                webpack 5.15.0 compiled successfully in 551 ms
                asset bundle.js 997 KiB [emitted] (name: main) 1 related asset
                cached modules 963 KiB [cached] 28 modules
                runtime modules 931 bytes 4 modules
                ./frontend/src/components/App.jsx 3.82 KiB [built] [code generated]
                webpack 5.15.0 compiled successfully in 833 ms
                asset bundle.js 997 KiB [emitted] (name: main) 1 related asset
                cached modules 963 KiB [cached] 28 modules
                runtime modules 931 bytes 4 modules
                ./frontend/src/components/App.jsx 3.82 KiB [built] [code generated]
                webpack 5.15.0 compiled successfully in 676 ms
                asset bundle.js 998 KiB [emitted] (name: main) 1 related asset
                cached modules 963 KiB [cached] 28 modules
                runtime modules 931 bytes 4 modules
                ./frontend/src/components/App.jsx 3.89 KiB [built] [code generated]
                webpack 5.15.0 compiled successfully in 868 ms
                asset bundle.js 998 KiB [emitted] (name: main) 1 related asset
                cached modules 966 KiB [cached] 28 modules
                runtime modules 931 bytes 4 modules
                ./node_modules/css-loader/dist/cjs.js!./frontend/src/css/App.css 1.88 KiB [built] [code generated]
                webpack 5.15.0 compiled successfully in 773 ms
                asset bundle.js 998 KiB [emitted] (name: main) 1 related asset
                cached modules 966 KiB [cached] 28 modules
            </p>
          </div>
          <div className="page-divider"></div>

        </div>
        <Footer />
      </span>
    );
  }
}
export default App;
