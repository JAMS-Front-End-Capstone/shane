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
        <div className="ppr_rup ppr_priv_health_notice_banner_new">
          <div className="react-container">
            <div className="">
              <div className="_298K8dGN">
                <div className="_1anKb-nl">
                  <div className="O82K35T8">
                    <div className="_2dfJVSbd">
                      <span className="_19xIjkxN">
                        <span className="HLvj7Lh5 _1jvubpIi _3aNK9c7h">TRAVEL NOTICE:</span>
                      </span>
                      <span className="HLvj7Lh5 ciJH8P2l _2s3pPhGm">
                        <a target="_blank" href="/COVID-2019" className="_3S6pHEQs gZ95jyA4 _38K76hiv">Learn more about COVID-19</a>
                      </span>
                    </div>
                    <button className="Z5j0Wsic" aria-label="Close">
                      <svg viewBox="0 0 24 24" width="13px" height="13px" className="_2HBN-k68 _14frGWqD">
                        <path d="M18.293 19.707L12 13.414l-6.293 6.293-1.414-1.414L10.586 12 4.293 5.707l1.414-1.414L12 10.586l6.293-6.293 1.414 1.414L13.414 12l6.293 6.293z">
                        </path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>










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
      </div>

    );
  }
}
export default Header;
