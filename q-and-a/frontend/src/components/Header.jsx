import React from 'react';
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log('rendering Component_Header');
    return (
      <div className="Component_Header">
        <div className="header-container">
          <div className="_3n8-XHcx">
            <div className="_2i8Npzw1">
              <h2 className="questions-and-answers">Questions &amp; Answers</h2>
              <div className="ask-a-question-div">
                <div className="ask-a-question-container">
                  <button className="ui_button primary">Ask a question</button>
                  <div>
                    <div>
                      <div className="down-icon-container">
                        <span className="ui_icon caret-down ">
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
