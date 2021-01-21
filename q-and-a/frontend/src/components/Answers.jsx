import React from 'react';
class Answers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let answers = '';
    const showAllAnswers = () => {
      // if (this.props.numOfReplies > 1) {
      //   return (
      //     <a href="#" className="show-all-answers-container">Show all answers</a>
      //   );
      // } else {
      return ( <span></span> );
      // }
    };

    if (this.props.numOfReplies > 0) {
      answers = this.props.replies.map((value, index, collection) => {
        let postDate = new Date(value.date);
        let formattedDateString = postDate.toLocaleDateString('en-US', {
          month: 'short',
          year: 'numeric'
        });

        // console.log('rendering Component_Answers');
        return (
          <div className="Component_Answer" key={value._id}>
            <div className="profile-container">
              <a href="#" className="profile-img-container ui_social_avatar xtra-small inline">
                <img src={value.author[0].imageUrl}></img>
              </a>
              <div className="profile-stats">
                <div className="menu-container">
                </div>
                <div className="username-container2">
                  <span>Answer from <a className="ui_link username-container" href="#">{value.author[0].name}</a>
                  </span>
                </div>
                <div className="_287pE6AZ">
                  <span className="_1_xw04A-">{formattedDateString} | <div className="overflow ">
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
              </div>{value.body}
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
            {showAllAnswers}
          </div>
        );
      });
    }

    return (
      <span className="Component_AnswerList">
        {answers}
      </span>
    );
  }
}
export default Answers;
