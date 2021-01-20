import React from 'react';
class HealthBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.hideHealthNotice = this.hideHealthNotice.bind(this);
  }
  hideHealthNotice(event) {
    document.getElementById('health-notice').style.display = 'none';
  }
  render() {
    console.log('rendering HealthBanner');
    return (
      <span id="Component_HealthBanner">
        <div className="health-notice" id="health-notice" onClick={this.hideHealthNotice}>
          <div className="health-container1">
            <div className="health-container2">
              <div className="health-container3">
                <div className="health-container4">
                  <span className="travel-notice">
                    <span className="travel-notice-text1">TRAVEL NOTICE:</span>
                  </span>
                  <span className="travel-notice-text2">
                    <a href="#">Learn more about COVID-19</a>
                  </span>
                </div>
                <button className="travel-notice-button" aria-label="Close">
                  <svg viewBox="0 0 24 24" width="13px" height="13px" className="_2HBN-k68 _14frGWqD">
                    <path d="M18.293 19.707L12 13.414l-6.293 6.293-1.414-1.414L10.586 12 4.293 5.707l1.414-1.414L12 10.586l6.293-6.293 1.414 1.414L13.414 12l6.293 6.293z">
                    </path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </span>
    );
  }
}
export default HealthBanner;
