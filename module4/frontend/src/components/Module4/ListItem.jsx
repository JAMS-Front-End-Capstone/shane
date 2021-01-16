const React = require('react');
import FavIcon from './FavIcon.jsx';

class ListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(props) {
    console.log('rendering Module4-ListItem');
    if (this.props.elements.length > 0) {
      const records = this.props.elements.map((value, index, collection) => {
        const reviewBubbleCount = 'ui_bubble_rating bubble_' + value.reviewRating;
        return (
          <div className="ListItemContainer" key={'m4-list-item_' + index}>
            <div className="poi">
              <a href="#" className="thumbnail">
                <div className="prw_common_centered_thumbnail">
                  <div className="sizing_wrapper">
                    <div className="centering_wrapper">
                      <img src={value.image} className="photo_image" alt={value.name}></img>
                    </div>
                  </div>
                </div>
              </a>
              <div className="detail">
                <div className="poiTitle" title={value.name} dir="auto"> <span className="poiTitle">{value.name}</span>
                </div>
                <div className="clear">
                </div>
                <div className="item">
                  <div className="rating-widget">
                    <div className="prw_common_location_rating_simple">
                      <span className={reviewBubbleCount}>
                      </span>
                    </div>
                  </div>
                  <a href="#" className="review_count">&nbsp;{value.reviewQty} Reviews</a>
                </div>
                <div className="item_name">{value.propertyType}</div>
                <div className="price">
                  <div className="from">
                    from&nbsp;
                    <span className="price_amt">{'$' + value.cost + '*'}
                    </span>
                  </div>
                  <div className="clear">
                  </div>
                </div>
              </div>
            </div>
            <FavIcon />
          </div>
        );
      });
      return (
        <span>
          {records}
        </span>
      );
    } else {
      return (
        <span></span>
      );
    }

  }
}
export default ListItem;
