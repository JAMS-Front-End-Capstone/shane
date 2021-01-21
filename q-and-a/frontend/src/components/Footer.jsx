import React from 'react';
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendering Component_Footer');
    return (
      <div className="Component_Footer">
        <div className="footer-item">
          <span className="ui_icon pencil-paper footer-item-icon">
          </span>
          <div className="footer-item-title">Write a review</div>
          <div className="footer-item-body">What was your experience like?</div>
          <a href="#" className="ui_button primary footer-item-button">Write a review</a>
        </div>
        <div className="footer-item">
          <span className="ui_icon camera footer-item-icon">
          </span>
          <div className="footer-item-title">Share your best travel photo</div>
          <div className="footer-item-body">Let the world see your experience through your eyes.</div>
          <a href="#" className="ui_button primary footer-item-button">Post a photo</a>
        </div>
        <div className="footer-item">
          <span className="ui_icon forums footer-item-icon">
          </span>
          <div className="footer-item-title">Get quick answers</div>
          <div className="footer-item-body">Ask fellow travelers and attraction managers your top questions.</div>
          <a href="#" className="ui_button primary footer-item-button">Ask a question</a>
        </div>
      </div>
    );
  }
}
export default Footer;
