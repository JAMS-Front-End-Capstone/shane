import React from 'react';
import QuestionList from './QuestionList.jsx';
import Navigation from './Navigation.jsx';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import axios from 'axios';
import './css/App.css';

const API_SERVER_URL = 'http://localhost:3000/API/retrieve';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getDataFromAPI = this.getDataFromAPI.bind(this);
  }
  getDataFromAPI() {
    console.log('App.getDataFromAPI starting...');
    axios.get(API_SERVER_URL)
      .then(({ data }) => {
        if (data.length === 0) { console.log('Module 4: LiAppst.getElementsFromAPI: ERROR: Received zero records from API server. Check database contents.'); }
        this.setState( { elements: data } );
      })
      .catch(function (error) {
        console.log('Module 4: App.getElementsFromAPI: ERROR!', error);
      });
  }
  componentDidMount() {
    this.getDataFromAPI();
  }
  render() {
    console.log('rendering App');
    return (
      <div className="Q-and-A_Container">
        <Navigation />
        <Header />
        <QuestionList />
        <Footer />
      </div>
    );
  }
}
export default App;
