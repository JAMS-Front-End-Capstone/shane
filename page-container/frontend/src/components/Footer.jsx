import React from 'react';
import '../css/Footer.css';

class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendering Footer');
    return (
      <div id="Component_Footer" key="Footer" className="footer">
        <div className="footer-div">
          <footer className="footer-container">
            <div className="footer-grid-container">
              <div className="footer-grid">
                <div className="footer-currency-country">
                </div>
                <div className="footer-colums1and2">
                  <div className="footer-links-container">
                    <img className="footer-logo" src="Tripadvisor_logoset_solid_green.svg"></img>
                    <div>
                      <div className="footer-copyright-container">
                        <div className="footer-copyright-text">© 2021 TripAdvisor LLC All rights reserved.</div>
                      </div>
                      <div className="footer-links-container">
                        <span className="footer-links-span">
                          <span className="footer-links-text">
                            <a className="footer-links-text" href="#">
                              <span className="footer-links-text-content">Terms of Use</span>
                            </a>
                          </span>
                          <span className="footer-links-text">
                            <a className="footer-links-text" href="#">
                              <span className="footer-links-text-content">Privacy and Cookies Statement</span>
                            </a>
                          </span>
                          <span className="footer-links-text">
                            <a className="footer-links-text" href="#">
                              <span className="footer-links-text-content">Cookie consent</span>
                            </a>
                          </span>
                          <span className="footer-links-text">
                            <a className="footer-links-text" href="#">
                              <span className="footer-links-text-content">Site Map</span>
                            </a>
                          </span>
                          <span className="footer-links-text">
                            <a className="footer-links-text" href="#">
                              <span className="footer-links-text-content">How the site works</span>
                            </a>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="footer-disclaimer">
                    <p className="footer-disclaimer-text">This is the version of our website addressed to speakers of English in the United States. If you are a resident of another country or region, please select the appropriate version of Tripadvisor for your country or region in the drop-down menu.</p>
                    <p className="footer-disclaimer-text">TripAdvisor LLC makes no guarantees for availability of prices advertised on our sites and applications. Listed prices may require a stay of a particular length or have blackout dates, qualifications or other applicable restrictions. TripAdvisor LLC is not responsible for any content on external web sites that are not owned or operated by Tripadvisor. Indicative hotel prices displayed on our “Explore” pages are estimates extrapolated from historic pricing data.</p>
                    <p className="footer-disclaimer-text">TripAdvisor LLC is not a booking agent or tour operator. When you book with one of our partners, please be sure to check their site for a full disclosure of all applicable fees.</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    );
  }
}
export default Footer;
