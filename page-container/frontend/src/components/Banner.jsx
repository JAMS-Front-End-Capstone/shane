import React from 'react';
import '../css/Banner.css';

class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendering Banner');
    return (
      <div className="Header global-header">
        <div className="banner-container1">
          <div className="banner-container2">
            <div className="banner">
              <div>
                <img className="banner-img" src="x.gif" alt="" k3i3hxuv4="">
                </img>
                <div className="banner-box">
                  <div className="banner-logo">
                    <img src="Tripadvisor_lockup_horizontal.svg" className="banner-logo-svg" alt="TripAdvisor"></img>
                  </div>
                  <div className="banner-divider"></div>
                  <div className="banner-ad">
                    <span>
                      <b>Save money.</b> We search 200+ sites for the lowest hotel prices.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Banner;
