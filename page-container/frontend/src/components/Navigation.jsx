import React from 'react';
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendering Navigation');
    return (
      <span id="Component_Navigation" className="Component_Navigation">
        <div className="_1wVsKXvB">
          <div>
          </div>
          <div className="navigation-container1">
            <header className="navigation-header">
              <div className="navigation-div">
                <nav className="navigation-nav">
                  <a className="navigation-logo" href="#">
                    <img className="navigation-logo" src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="Tripadvisor">
                    </img>
                  </a>
                  <div className="navigation-search-container">
                    <div className="navigation-search">
                      <div className="navigation-search-box" >
                        <form className="navigation-search-form">
                          <input type="search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" required="" name="q" className="navigation-search-text" title="Search" aria-label="Search" value=""></input>
                          <button type="submit" formaction="/Search" className="navigation-search-submit" title="Search" aria-label="Search" tabindex="-1">
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="navigation-review">
                    <div>
                      <button type="button" className="navigation-button" aria-label="Post" aria-expanded="false">
                        <svg viewBox="0 0 24 24" width="24px" height="24px" className="navigation-svg">
                          <path d="M12 2C6.478 2 2 6.478 2 11.999 2 17.522 6.478 22 12 22s10-4.478 10-10.001C22 6.478 17.522 2 12 2zm0 17.999c-4.411 0-8-3.589-8-8 0-4.41 3.589-8 8-8s8 3.59 8 8c0 4.411-3.589 8-8 8z">
                          </path>
                          <path d="M13 7.336h-2v3.501H7.5v1.999H11v3.5h2v-3.5h3.501v-1.999H13z">
                          </path>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="_1_6Nwle6">
                    <a className="navigation-button" href="#">
                      <svg viewBox="0 0 24 24" width="24px" height="24px" className="navigation-svg">
                        <path d="M12 2c.539 0 .976.437.976.976v1.032c1.779.21 3.268 1 4.356 2.222 1.271 1.426 1.937 3.372 1.97 5.512.013.755.016 3.706.016 5.381h1.463v1.951H15.77a4.4 4.4 0 01-.336.924 3.545 3.545 0 01-1.2 1.382c-.589.391-1.332.62-2.234.62s-1.645-.229-2.233-.621a3.538 3.538 0 01-1.2-1.382 4.4 4.4 0 01-.336-.924H3.22v-1.951h1.463c0-1.669.002-4.602.015-5.372-.007-2.149.663-4.098 1.944-5.523 1.098-1.222 2.601-2.009 4.383-2.219V2.976A.975.975 0 0112 2zM6.634 17.122h10.732c0-1.675-.003-4.611-.016-5.351-.026-1.763-.573-3.232-1.475-4.245-.891-1-2.187-1.625-3.876-1.625-1.692 0-3.007.627-3.906 1.627-.909 1.012-1.452 2.473-1.444 4.223 0 .001-.015 3.696-.015 5.371zm3.653 1.951l.024.052c.125.249.297.471.538.63.234.156.59.294 1.151.294.562 0 .917-.138 1.151-.294a1.601 1.601 0 00.561-.682h-3.425z">
                        </path>
                      </svg>
                    </a>
                  </div>
                  <div className="_1_6Nwle6">
                    <a className="navigation-button" href="#">
                      <svg viewBox="0 0 24 24" width="24px" height="24px" className="navigation-svg">
                        <path d="M12.001 20.729s-6.741-5.85-8.485-8.003c-2.055-2.541-2.018-5.837.089-7.836a5.928 5.928 0 014.104-1.618c1.548 0 3.005.575 4.104 1.618l.174.165.162-.155a5.93 5.93 0 014.104-1.618c1.548 0 3.005.574 4.104 1.618 2.158 2.049 2.192 5.273.084 7.841-1.755 2.139-8.44 7.988-8.44 7.988zM7.709 5.271a3.935 3.935 0 00-2.727 1.068c-1.578 1.498-1.06 3.708.088 5.128 1.306 1.613 5.333 5.204 6.925 6.605 1.583-1.404 5.58-4.993 6.899-6.601 1.195-1.455 1.685-3.603.085-5.122-.726-.689-1.694-1.069-2.728-1.069s-2.001.38-2.728 1.069l-1.539 1.462-1.551-1.473a3.925 3.925 0 00-2.724-1.067z">
                        </path>
                      </svg>
                    </a>
                  </div>
                  <div className="navigation-signin-container">
                    <a class="navigation-signin-link" href="#">
                      <span class="navigation-signin-text">
                    Sign in
                      </span>
                    </a>
                  </div>
                </nav>
              </div>
            </header>
          </div>
        </div>
      </span>
    );
  }
}
export default Navigation;
