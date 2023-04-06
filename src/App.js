import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Background from './Components/Background/Background';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Background />;
  }
}

export default App;
