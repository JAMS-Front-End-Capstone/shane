const QTY_OF_REVIEWS_TO_DISPLAY = 3;
const API_SERVER_URL = '/API/q-and-a/retrieve';
var API_PROXY = document.getElementById('proxyUrl').attributes[2].nodeValue | '';

import React from 'react';
import Navigation from './Navigation.jsx';
import Questions from './Questions.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import axios from 'axios';
import './css/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: []
    };
    this.getDataFromAPI = this.getDataFromAPI.bind(this);
  }
  getDataFromAPI() {
    axios.get(API_PROXY + API_SERVER_URL)
      .then(({ data }) => {
        if (data.length === 0) { console.log('Module q-and-a: LiAppst.getElementsFromAPI: ERROR: Received zero records from API server. Check database contents.'); }
        this.setState( { elements: data.splice(0, QTY_OF_REVIEWS_TO_DISPLAY) } );
      })
      .catch(function (error) {
        console.log('Module q-and-a: App.getElementsFromAPI: ERROR!', error);
      });
  }
  componentDidMount() {
    this.getDataFromAPI();
  }
  render() {
    if (this.state.elements.length === 0) {
      return (
        <div>Loading...</div>
      );
    } else {
      return (
        <div className="Q-and-A_Container">
          <Navigation reviewCount={this.state.elements.length}/>
          <Header />
          <Questions elements={this.state.elements} />
          <Footer />
        </div>
      );

    }
  }
}
export default App;
