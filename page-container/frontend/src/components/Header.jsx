import React from 'react';
import '../css/Header.css';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendering Header');
    return (
      <div key="Header">
        Header
        Navigation
        <div className="navigation-links">
          <div className="navigation-container1">
            <div className="navigation-container2">
              <div className="links-container1">
                <div className="links-container2">
                  <div className="links-container3">
                    <ul className="nav-menu-items">
                      <li className="nav-sub-item">
                        <a href="#" className="nav-link ui_tabs">Tahiti </a>
                      </li>
                      <li className="nav-sub-item">
                        <a href="#" className="nav-link ui_tabs">
                          <span className="ui_icon">
                          </span>Hotels </a>
                      </li>
                      <li className="nav-sub-item">
                        <a href="#" className="nav-link ui_tabs active" >
                          <span className="ui_icon">
                          </span>Things to do </a>
                      </li>
                      <li className="nav-sub-item">
                        <a href="#" className="nav-link ui_tabs">
                          <span className="ui_icon">
                          </span>Restaurants </a>
                      </li>
                      <li className="nav-sub-item">
                        <a href="#" className="nav-link ui_tabs">
                          <span className="ui_icon">
                          </span>Flights </a>
                      </li>
                      <li className="nav-sub-item">
                        <a href="#" className="nav-link ui_tabs">
                          <span className="ui_icon">
                          </span>Vacation Rentals </a>
                      </li>
                      <li className="nav-sub-item">
                        <a href="#" className="nav-link ui_tabs">
                          <span className="ui_icon">
                          </span>Shopping </a>
                      </li>
                      <li className="nav-sub-item">
                        <a href="#" className="nav-link ui_tabs">
                          <span className="ui_icon">
                          </span>Vacation Packages </a>
                      </li>
                      <li className="nav-sub-item">
                        <a href="#" className="nav-link ui_tabs">
                          <span className="ui_icon">
                          </span>Cruises </a>
                      </li>
                      <li className="nav-sub-item">
                        <a href="#" className="nav-link ui_tabs">
                          <span className="ui_icon">
                          </span>Rental Cars </a>
                      </li>
                      <li className="nav-sub-item force-more">
                        <a href="#" className="nav-link ui_tabs">
                          <span className="ui_icon">
                          </span>Add a Place </a>
                      </li>
                      <li className="nav-sub-item force-more">
                        <a href="#" className="nav-link ui_tabs">
                          <span className="ui_icon">
                          </span>Travel Forum </a>
                      </li>
                      <li className="nav-sub-item force-more">
                        <a href="#" className="nav-link ui_tabs">
                          <span className="ui_icon">
                          </span>Airlines </a>
                      </li>
                      <li className="nav-sub-item force-more">
                        <a href="#" className="nav-link ui_tabs">
                          <span className="ui_icon">
                          </span>Best of 2020 </a>
                      </li>
                      <li className="nav-sub-item force-more">
                        <a href="#" className="nav-link ui_tabs">Road Trips </a>
                      </li>
                      <li className="nav-sub-item force-more">
                        <a href="#" className="nav-link ui_tabs">
                          <span className="ui_icon">
                          </span>Help Center </a>
                      </li>
                    </ul>
                    <ul className="nav-ellipsis">
                      <li className="global-nav-links-ellipsis">
                        <span className="nav-link ellipsis">
                          <span className="ui_icon more-horizontal">
                          </span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="global-nav-no-refresh">
          <div className="inner">
            <div className="ui_container">
              <div className="header1-h1">
                <h1 className="header2-h1">
                    Punaauia Beach: Address, Punaauia Beach Reviews: 4/5
                </h1>
              </div>
              <div className="breadcrumbs-container">
                <ul className="breadcrumbs">
                  <li className="breadcrumb">
                    <a className="link" href="#">
                      <span>South Pacific</span>
                    </a>&nbsp;<span className="ui_icon single-chevron-right">
                    </span>&nbsp;</li>
                  <li className="breadcrumb">
                    <a className="link" href="#">
                      <span>French Polynesia</span>
                    </a>&nbsp;<span className="ui_icon single-chevron-right">
                    </span>&nbsp;</li>
                  <li className="breadcrumb">
                    <a className="link" href="#">
                      <span>Society Islands</span>
                    </a>&nbsp;<span className="ui_icon single-chevron-right">
                    </span>&nbsp;</li>
                  <li className="breadcrumb">
                    <a className="link" href="#">
                      <span>Tahiti</span>
                    </a>&nbsp;<span className="ui_icon single-chevron-right">
                    </span>&nbsp;</li>
                  <li className="breadcrumb">
                    <a className="link" href="#">
                      <span>Punaauia</span>
                    </a>&nbsp;<span className="ui_icon single-chevron-right">
                    </span>&nbsp;</li>
                  <li className="breadcrumb">
                    <a className="link" href="#">
                      <span>Things to Do in Punaauia</span>
                    </a>&nbsp;<span className="ui_icon single-chevron-right">
                    </span>&nbsp;</li>
                  <li className="breadcrumb">Punaauia Beach</li>
                </ul>
              </div>

            </div>
          </div>

        </div>
      </div>

    );
  }
}
export default Header;
