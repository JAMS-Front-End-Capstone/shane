import React from 'react';
import AnswerList from './AnswerList.jsx';
import Reply from './Reply.jsx';
class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendering Component_Question');
    return (
      <span className="Component_Question">
        <div className="_25dajjyJ">
          <div className="_310S4sqz">
            <a href="/Profile/aixlac" target="_self" className="_3x5_awTA ui_social_avatar inline">
              <img alt="" src="https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/e4/59/default-avatar-2020-49.jpg"></img>
            </a>
            <div className="_2uYWQXeO">
              <div className="_3TMaHs5O">
                <div className="overflow ">
                  <span className="_3-zQ1eyd _3LR9XvrV">
                    <svg x="0" y="0" viewBox="0 0 24 24" width="1em" height="1em" className="_2HBN-k68 _2JndpOur">
                      <circle cx="4.5" cy="11.9" r="2.5">
                      </circle>
                      <circle cx="19.5" cy="11.9" r="2.5">
                      </circle>
                      <circle cx="12" cy="11.9" r="2.5">
                      </circle>
                    </svg>
                  </span>
                </div>
                <span className="_3V8URHDq">
                </span>
              </div>
              <div className="_2fxQ4TOx">
                <span>
                  <a className="ui_header_link _1r_My98y" href="/Profile/aixlac">Christine D</a> asked a question May 2018</span>
              </div>
              <div className="_1EpRX7o3">
                <span className="_1TuWwpYf">
                  <span className="default _3J15flPT small">
                    <span className="ui_icon map-pin-fill _2kj8kWkW">
                    </span>aix-les-bains</span>
                </span>
                <span className="_3fPsSAYi">
                  <span>
                    <span className="_1fk70GUn">3</span> contributions</span>
                </span>
              </div>
            </div>
          </div>
          <div className="_309N7-x7">
            <button className="ui_button secondary small">Google Translation</button>
          </div>
          <a href="#" className="_1qcExlNg">Bonjour la plage est elle éloignée du port? Y a t il des taxis?
Merci!</a>
        </div>


        <AnswerList />
        <Reply />
      </span>
    );
  }
}
export default Question;
