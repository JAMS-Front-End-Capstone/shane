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
          <div className="_2WwfAZ1i">
            <header className="_3wrX4B4P">
              <div className="_1anKb-nl">
                <nav className="c35hjqC_">
                  <button className="_3tKR4Vlr" title="Menu" aria-label="Menu">
                    <svg viewBox="0 0 24 24" width="1em" height="1em" className="_2HBN-k68 _2JndpOur">
                      <path d="M2.038 4.511H22v2.496H2.038zM2 10.752h19.962v2.497H2zM2.014 16.992h19.962v2.496H2.014z">
                      </path>
                    </svg>
                  </button>
                  <a className="_1gs4JsPa" href="/">
                    <img className="_1AlVlFFs" src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg" alt="Tripadvisor">
                    </img>
                  </a>
                  <div className="_3_CFaclw">
                    <div className="WmEK0bU8">
                      <div className="i3bZ_gBa _1l0GdtUl" data-test-attribute="typeahead-SINGLE_SEARCH_NAV">
                        <div className="_3sXsAqz5">
                        </div>
                        <form className="R1IsnpX3" action="/Search">
                          <input type="search" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" required="" name="q" className="_3qLQ-U8m" title="Search" aria-label="Search" value=""></input>
                          <input type="hidden" name="searchSessionId" value="389082C7C951F648472BD475791CECFA1611100392970ssid"></input>
                          <input type="hidden" name="searchNearby" value="false"></input>
                          <input type="hidden" name="geo" value="297572"></input>
                          <button type="button" className="_3mLX8jwB _3djzE9Mn" title="Back" aria-label="Back">
                            <svg viewBox="0 0 24 24" width="1em" height="1em" className="_2HBN-k68 _2JndpOur">
                              <path d="M10.304 3.506l-8.048 8.047a.644.644 0 000 .895l8.048 8.047a.624.624 0 00.883 0l.882-.883a.624.624 0 000-.883l-5.481-5.48h14.714a.625.625 0 00.623-.625v-1.248a.624.624 0 00-.623-.624H6.588l5.481-5.481a.624.624 0 000-.883l-.882-.883a.623.623 0 00-.883-.004c-.001.002-.002.003 0 .005z">
                              </path>
                            </svg>
                          </button>
                          <button type="submit" formaction="/Search" className="_3mLX8jwB _2a_Ua4Qv" title="Search" aria-label="Search" tabindex="-1">
                            <svg viewBox="0 0 24 24" width="1em" height="1em" className="_2HBN-k68 _2JndpOur">
                              <path d="M22 20.514l-5.517-5.519a8.023 8.023 0 001.674-4.904c0-4.455-3.624-8.079-8.079-8.079C5.624 2.012 2 5.636 2 10.091s3.624 8.079 8.079 8.079a8.03 8.03 0 004.933-1.695l5.512 5.514L22 20.514zm-11.921-4.431c-3.305 0-5.993-2.688-5.993-5.992s2.688-5.992 5.993-5.992a6 6 0 015.992 5.992 6 6 0 01-5.992 5.992z">
                              </path>
                            </svg>
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="_1_6Nwle6">
                    <div>
                      <button type="button" className="_6zkbCr5n" aria-label="Post" aria-expanded="false">
                        <svg viewBox="0 0 24 24" width="24px" height="24px" className="_2HBN-k68 _2JndpOur">
                          <path d="M12 2C6.478 2 2 6.478 2 11.999 2 17.522 6.478 22 12 22s10-4.478 10-10.001C22 6.478 17.522 2 12 2zm0 17.999c-4.411 0-8-3.589-8-8 0-4.41 3.589-8 8-8s8 3.59 8 8c0 4.411-3.589 8-8 8z">
                          </path>
                          <path d="M13 7.336h-2v3.501H7.5v1.999H11v3.5h2v-3.5h3.501v-1.999H13z">
                          </path>
                        </svg>
                        <span className="_1aNd_1k8">Post</span>
                      </button>
                    </div>
                  </div>
                  <div className="_1_6Nwle6">
                    <a className="_6zkbCr5n" href="/Inbox">
                      <svg viewBox="0 0 24 24" width="24px" height="24px" className="_2HBN-k68 _2JndpOur">
                        <path d="M12 2c.539 0 .976.437.976.976v1.032c1.779.21 3.268 1 4.356 2.222 1.271 1.426 1.937 3.372 1.97 5.512.013.755.016 3.706.016 5.381h1.463v1.951H15.77a4.4 4.4 0 01-.336.924 3.545 3.545 0 01-1.2 1.382c-.589.391-1.332.62-2.234.62s-1.645-.229-2.233-.621a3.538 3.538 0 01-1.2-1.382 4.4 4.4 0 01-.336-.924H3.22v-1.951h1.463c0-1.669.002-4.602.015-5.372-.007-2.149.663-4.098 1.944-5.523 1.098-1.222 2.601-2.009 4.383-2.219V2.976A.975.975 0 0112 2zM6.634 17.122h10.732c0-1.675-.003-4.611-.016-5.351-.026-1.763-.573-3.232-1.475-4.245-.891-1-2.187-1.625-3.876-1.625-1.692 0-3.007.627-3.906 1.627-.909 1.012-1.452 2.473-1.444 4.223 0 .001-.015 3.696-.015 5.371zm3.653 1.951l.024.052c.125.249.297.471.538.63.234.156.59.294 1.151.294.562 0 .917-.138 1.151-.294a1.601 1.601 0 00.561-.682h-3.425z">
                        </path>
                      </svg>
                      <span className="_1aNd_1k8">Alerts</span>
                    </a>
                  </div>
                  <div className="_1_6Nwle6">
                    <a className="_6zkbCr5n" href="/Trips">
                      <svg viewBox="0 0 24 24" width="24px" height="24px" className="_2HBN-k68 _2JndpOur">
                        <path d="M12.001 20.729s-6.741-5.85-8.485-8.003c-2.055-2.541-2.018-5.837.089-7.836a5.928 5.928 0 014.104-1.618c1.548 0 3.005.575 4.104 1.618l.174.165.162-.155a5.93 5.93 0 014.104-1.618c1.548 0 3.005.574 4.104 1.618 2.158 2.049 2.192 5.273.084 7.841-1.755 2.139-8.44 7.988-8.44 7.988zM7.709 5.271a3.935 3.935 0 00-2.727 1.068c-1.578 1.498-1.06 3.708.088 5.128 1.306 1.613 5.333 5.204 6.925 6.605 1.583-1.404 5.58-4.993 6.899-6.601 1.195-1.455 1.685-3.603.085-5.122-.726-.689-1.694-1.069-2.728-1.069s-2.001.38-2.728 1.069l-1.539 1.462-1.551-1.473a3.925 3.925 0 00-2.724-1.067z">
                        </path>
                      </svg>
                      <span className="_1aNd_1k8">Trips</span>
                    </a>
                  </div>
                  <div className="pnI_yZEP">
                    <a className="_1JOGv2rJ _1_M9wxW9 _1qMtXLO6 _3yBiBka1" href="/RegistrationController?flow=sign_up_and_save&amp;returnTo=%2FAttraction_Review-g297572-d2266754-Reviews-Punaauia_Beach-Punaauia_Tahiti_Society_Islands.html&amp;fullscreen=true&amp;flowOrigin=login&amp;hideNavigation=true">
                      <span className="HLvj7Lh5 _9RPF_Kg6">Sign in</span>
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
