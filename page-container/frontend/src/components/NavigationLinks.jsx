import React from 'react';
class NavigationLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log('Rendering NavigationLinks');
    return (
      <span id="Component_NavigationLinks">
        <div className="navigation-links">
          <div className="navigation-container1">
            <div className="navigation-container2">
              <div className="links-container1">
                <div className="links-container2">
                  <div className="links-container3">
                    <ul className="nav-menu-items global-nav-links-menu">
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
                    </ul>
                    <ul className="global-nav-links-menu-ellipsis is-top-only">
                      <li className="global-nav-links-ellipsis">
                        <span className="global-nav-link global-nav-link-2018 ui_tab ellipsis">
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
      </span>
    );
  }
}
export default NavigationLinks;
