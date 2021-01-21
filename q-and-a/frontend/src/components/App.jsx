const QTY_OF_REVIEWS_TO_DISPLAY = 3;
const API_SERVER_URL = 'http://localhost:3000/API/retrieve';

import React from 'react';
import QuestionList from './QuestionList.jsx';
import Navigation from './Navigation.jsx';
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
    console.log('App.getDataFromAPI starting...');
    axios.get(API_SERVER_URL)
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
    console.log('rendering App');

    if (this.state.elements.length === 0) {
      return (
        <div>Loading...</div>
      );
    } else {
      return (
        <div className="Q-and-A_Container">
          <Navigation reviewCount={this.state.elements.length}/>
          <Header />
          <QuestionList elements={this.state.elements} />
          <Footer />
        </div>
      );

    }
  }
}
export default App;
