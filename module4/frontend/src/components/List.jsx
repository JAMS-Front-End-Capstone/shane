const React = require('react');
import ListItem from './ListItem.jsx';
import axios from 'axios';
const API_PROXY = document.getElementById('proxyUrl') ? document.getElementById('proxyUrl').attributes[2].nodeValue : '';
const API_PATH = '/API/related/retrieve';
import './App.css';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: []
    };
    this.getElementsFromAPI = this.getElementsFromAPI.bind(this);
  }
  getElementsFromAPI() {
    axios.get(API_PROXY + API_PATH)
      .then(({ data }) => {
        if (data.length === 0) { console.log('Module 4: List.getElementsFromAPI: ERROR: Received zero records from API server. Check database contents.'); }
        this.setState( { elements: data } );
      })
      .catch(function (error) {
        console.log('Module 4: List.getElementsFromAPI: ERROR!', error);
      });
  }

  componentDidMount() {
    this.getElementsFromAPI();
  }
  render() {
    if (this.state.elements.length > 0) {
      return (
        <div className="Module4 " key="Module4">
          <div id="atf_meta" className="ui_container"><p></p></div>
          <div id="btf_wrap" className="ui_container">
            <div id="taplc_location_detail_recently_viewed_ar_responsive_0" className="ppr_priv_location_detail_recently_viewed">
              <div className="ui_section">
                <div className="prw_shelves_shelf_widget">
                  <div className="attractions_recently_viewed">
                    <div className="shelf_header">
                      <div className="shelf_title" data-tpp="CrossSell" data-tpatt="0" data-tpid="1217">
                        <div className="shelf_title_container">
                          <a href="/Recent" className="ui_link title_text">Your Recently Viewed</a>
                          <span className="total_items_num">
                            ({this.state.elements.length})
                          </span>
                        </div>
                        <div>
                          <a href="#" className="see_all_link">See all</a>
                        </div>
                      </div>
                    </div>
                    <ListItem elements={this.state.elements} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <span>Loading...</span>
      );
    }
  }
}
export default List;
