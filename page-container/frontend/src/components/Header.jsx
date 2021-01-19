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
        <div className="global-nav-no-refresh">
          <div className="ppr_rup ppr_priv_global_nav_onpage_assets is-shown-at-tablet">
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

      </div>
    );
  }
}
export default Header;
