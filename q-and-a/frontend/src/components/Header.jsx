import React from 'react';
import './css/Header.css';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendering Component_Header');
    return (
      <div className="Component_Header">
        <div class="_7PJap-I0">
          <div class="_3n8-XHcx">
            <div class="_2i8Npzw1">
              <h2 class="_1VLgXtcm">Questions &amp; Answers</h2>
              <div class="_3W6yB1_L">
                <div class="_1eN13RvW">
                  <button class="ui_button primary">Ask a question</button>
                  <div>
                    <div>
                      <div class="_3rGPLWMi">
                        <span class="ui_icon caret-down ">
                        </span>
                      </div>
                    </div>
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
export default Header;
