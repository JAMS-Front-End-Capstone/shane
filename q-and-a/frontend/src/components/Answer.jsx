import React from 'react';
class Answer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendering Component_Answer');
    return (
      <span className="Component_Answer">
        <div className="main-container">
          <div className="profile-container">
            <a href="/Profile/lepicurien33" target="_self" className="profile-img-container ui_social_avatar xtra-small inline">
              <img alt="" src="https://media-cdn.tripadvisor.com/media/photo-t/0e/79/71/87/lepicurien33.jpg"></img>
            </a>
            <div className="profile-stats">
              <div className="menu-container">
              </div>
              <div className="username-container2">
                <span>Answer from <a className="ui_link username-container" href="/Profile/lepicurien33">lepicurien33</a>
                </span>
              </div>
              <div className="_287pE6AZ">
                <span className="_1_xw04A-">May 2018 | <div className="overflow ">
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
                </span>
              </div>
            </div>
          </div>
          <div className="message-body-container">
            <div className="translation-container">
              <button className="ui_button secondary small">Google Translation</button>
            </div>Bonjour,
la plage se trouve près de la marina à environ 15 km de Papeete
Il y a des bus qui s'arrêtent près de la plage et des taxis à la marina
Bon séjour !!!<form className="_3PBJKBYy">
              <span className="thumb-icon-container">
                <span className="ui_icon thumbs-up ">
                </span>
              </span>
              <span className="votes-container">0 votes</span>
              <span className="thumb-icon-container">
                <span className="ui_icon thumbs-down ">
                </span>
              </span>
            </form>
          </div>
          <a href="#" className="show-all-answers-container">Show all answers</a>
        </div>
      </span>
    );
  }
}
export default Answer;
