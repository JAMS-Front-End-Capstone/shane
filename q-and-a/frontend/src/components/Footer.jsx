import React from 'react';
import './css/Footer.css';
class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('rendering Component_Footer');
    return (
      <div className="Component_Footer">
        <div class="footer-item">
          <span class="ui_icon pencil-paper footer-item-icon">
          </span>
          <div class="footer-item-title">Write a review</div>
          <div class="footer-item-body">What was your experience like?</div>
          <a href="#" class="ui_button primary footer-item-button">Write a review</a>
        </div>
        <div class="footer-item">
          <span class="ui_icon camera footer-item-icon">
          </span>
          <div class="footer-item-title">Share your best travel photo</div>
          <div class="footer-item-body">Let the world see your experience through your eyes.</div>
          <a href="#" class="ui_button primary footer-item-button">Post a photo</a>
        </div>
        <div class="footer-item">
          <span class="ui_icon forums footer-item-icon">
          </span>
          <div class="footer-item-title">Get quick answers</div>
          <div class="footer-item-body">Ask fellow travelers and attraction managers your top questions.</div>
          <a href="#" class="ui_button primary footer-item-button">Ask a question</a>
        </div>
      </div>
    );
  }
}
export default Footer;
