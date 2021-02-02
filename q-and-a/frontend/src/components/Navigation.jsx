import React from 'react';
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log('rendering Component_Navigation');
    return (
      <span id="Component_Navigation">
        <div className="navigation-tabs-reviews" data-tab="TABS_REVIEWS" data-section-signature="community" id="REVIEWS">
          <div className="navigation-container">
            <div className="navigation-section navigation-section-span" onClick={(e)=> toggleDisplayOfReviewsAndQandA(e)}>
              <span className="ui_icon pencil-paper navigation-section-icon">
              </span>
              <span className="">
                <span className="navigation-qty">15</span>
                <span className="navigation-text">Reviews</span>
              </span>
            </div>
            <div className="navigation-section navigation-section-span navigation-forums-section navigation-section-active" id="showQanda">
              <span className="ui_icon forums navigation-section-icon">
              </span>
              <span className="">
                <span className="navigation-qty">{this.props.reviewCount}</span>
                <span className="navigation-text">Q&amp;A</span>
              </span>
            </div>
          </div>
        </div>
      </span>
    );
  }
}
export default Navigation;
