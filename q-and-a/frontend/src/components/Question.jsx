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
        <div className="main-container">
          <div className="profile-container">
            <a href="/Profile/aixlac" target="_self" className="profile-img-container ui_social_avatar inline">
              <img alt="" src="https://media-cdn.tripadvisor.com/media/photo-t/1a/f6/e4/59/default-avatar-2020-49.jpg"></img>
            </a>
            <div className="profile-stats">
              <div className="menu-container">
                <div className="overflow ">
                  <span className="ellipsis ellipsis2">
                    <svg x="0" y="0" viewBox="0 0 24 24" width="1em" height="1em" className="svg-container svg-avatar-container">
                      <circle cx="4.5" cy="11.9" r="2.5">
                      </circle>
                      <circle cx="19.5" cy="11.9" r="2.5">
                      </circle>
                      <circle cx="12" cy="11.9" r="2.5">
                      </circle>
                    </svg>
                  </span>
                </div>
                <span className="date-span">
                </span>
              </div>
              <div className="username-container2">
                <span>
                  <a className="ui_header_link username-container" href="/Profile/aixlac">Christine D</a> asked a question May 2018</span>
              </div>
              <div className="profile-stats-details">
                <span className="_1TuWwpYf">
                  <span className="default profile-location small">
                    <span className="ui_icon map-pin-fill profile-map">
                    </span>aix-les-bains</span>
                </span>
                <span className="_3fPsSAYi">
                  <span>
                    <span className="_1fk70GUn">3</span> contributions</span>
                </span>
              </div>
            </div>
          </div>
          <div className="translation-container">
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
