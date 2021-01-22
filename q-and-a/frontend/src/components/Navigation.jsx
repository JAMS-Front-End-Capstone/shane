import React from 'react';
class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    // console.log('rendering Component_Navigation');
    return (
      <span className="Component_Navigation">
        <div className="navigation-tabs-reviews" data-tab="TABS_REVIEWS" data-section-signature="community" id="REVIEWS">
          <div className="navigation-container">
            <span className="navigation-section navigation-section-span">
              <span className="ui_icon pencil-paper navigation-section-icon">
              </span>
              <span className="">
                <span className="navigation-qty">40</span>
                <span className="navigation-text">Reviews</span>
              </span>
            </span>
            <span className="navigation-section navigation-section-span navigation-forums-section navigation-section-active">
              <span className="ui_icon forums navigation-section-icon">
              </span>
              <span className="">
                <span className="navigation-qty">{this.props.reviewCount}</span>
                <span className="navigation-text">Q&amp;A</span>
              </span>
            </span>
          </div>
        </div>
      </span>
    );
  }
}
export default Navigation;
