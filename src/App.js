import React, { Component } from 'react';
import './App.css';
import CustomNavbar from './components/CustomNavbar';
import Banner from './components/Banner';
import Main from './components/Main';

class App extends Component {

  render () {

    const url = window.location.href;

    return (
      <div>
        <CustomNavbar />
        <Banner curr_url = {url} />
        <Main curr_url = {url} />
      </div>
    );
  }
}

export default App;