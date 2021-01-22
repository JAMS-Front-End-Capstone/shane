import React from 'react';
import Answers from './Answers.jsx';
import Reply from './Reply.jsx';

class Questions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(props) {
    // console.log('rendering Component_Question');
    let reviews = this.props.elements.map((value, index, collection) => {
      let postDate = new Date(value.date);
      let formattedDateString = postDate.toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
      });

      return (
        <div className="Component_Question" key={value._id}>
          <div className="main-container">
            <div className="profile-container">
              <a href="#" target="_self" className="profile-img-container ui_social_avatar inline">
                <img src={value.author[0].imageUrl}></img>
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
                    <a className="ui_header_link username-container" href="#">{value.author[0].name}</a> asked a question {formattedDateString}</span>
                </div>
                <div className="profile-stats-details">
                  <span className="_1TuWwpYf">
                    <span className="default profile-location small">
                      <span className="ui_icon map-pin-fill profile-map">
                      </span>{value.author[0].location}</span>
                  </span>
                  <span className="_3fPsSAYi">
                    <span>
                      <span className="_1fk70GUn">{value.author[0].contributions}</span> contributions</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="translation-container">
              <button className="ui_button secondary small">Google Translation</button>
            </div>
            <a href="#" className="_1qcExlNg">{value.body}</a>
            <form className="votes-container">
              <span className="votes-icon-container">
                <span className="ui_icon thumbs-up ">
                </span>
              </span>
              <span className="votes-qty-container">{value.helpfulScore} votes</span>
              <span className="votes-icon-container">
                <span className="ui_icon thumbs-down ">
                </span>
              </span>
            </form>
          </div>
          <Answers numOfReplies={value.replies.length} replies={value.replies}/>
          <Reply />
        </div>

      );
    });
    return (
      <div className="Component_QuestionList">
        {reviews}
      </div>
    );
  }
}
export default Questions;
