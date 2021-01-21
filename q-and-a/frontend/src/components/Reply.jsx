import React from 'react';
class Reply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendering Component_Reply');
    return (
      <span className="Component_Reply">
        <div className="main-container">
          <form className="reply-container">
            <span className="profile-img-container ui_social_avatar xtra-small inline">
              <div className="avatar-icon-container">
                <svg viewBox="0 0 24 24" width="24px" height="24px" className="svg-container svg-avatar-container">
                  <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zM7.88 18.85a4.271 4.271 0 018.24 0 8.001 8.001 0 01-8.24 0zm9.89-1.321a6.257 6.257 0 00-11.537 0 8 8 0 1111.537 0z">
                  </path>
                  <path d="M12 6a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm0 5a1.5 1.5 0 110-3 1.5 1.5 0 010 3z">
                  </path>
                </svg>
              </div>
            </span>
            <div className="answer-container">
              <textarea type="text" name="answer" rows="1" className="answer-text answer-text2" placeholder="Answer question">
              </textarea>
            </div>
          </form>
        </div>
      </span>
    );
  }
}
export default Reply;
