import React from 'react';
import './App.css';
import Background from './Components/Background/Background';

class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      stage: 1,
      name: '',
      email: '',
      phone: ''
  };

  this.increaseStage = this.increaseStage.bind(this);
  this.decreaseStage = this.decreaseStage.bind(this);
  this.handleNameChange = this.handleNameChange.bind(this);
  this.handleEmailChange = this.handleEmailChange.bind(this);
  this.handlePhoneChange = this.handlePhoneChange.bind(this); 
  }
  

  increaseStage() {
    if(this.state.stage < 5) {
      this.setState({...this.state, stage: (this.state.stage + 1)});
    }
  }

  decreaseStage() {
    if(this.state.stage > 1) {
      this.setState({...this.state, stage: (this.state.stage - 1)});
    }
  }

  handleNameChange(event) {
    this.setState({...this.state, name: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({...this.state, email: event.target.value});
  }

  handlePhoneChange(event) {
    this.setState({...this.state, phone: event.target.value});
  }


  render() {
    return <Background
             increaseStage={this.increaseStage}
             decreaseStage={this.decreaseStage}
             stage={this.state.stage}
             handleNameChange={this.handleNameChange}
             handleEmailChange={this.handleEmailChange}
             handlePhoneChange={this.handlePhoneChange}
             />;
  }
}

export default App;
