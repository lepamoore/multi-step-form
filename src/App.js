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
      phone: '',
      plan: '',
      price: 200,
      billing: 'Monthly'
  };

  this.increaseStage = this.increaseStage.bind(this);
  this.decreaseStage = this.decreaseStage.bind(this);
  this.handleNameChange = this.handleNameChange.bind(this);
  this.handleEmailChange = this.handleEmailChange.bind(this);
  this.handlePhoneChange = this.handlePhoneChange.bind(this); 
  this.handlePlanSelect = this.handlePlanSelect.bind(this);
  this.handleBillingCheckbox = this.handleBillingCheckbox.bind(this);
  this.opacityOn = this.opacityOn.bind(this);
  this.detectStage = this.detectStage.bind(this);
  this.onlyLettersAndSpaces = this.onlyLettersAndSpaces.bind(this);
  this.onlyEmail = this.onlyEmail.bind(this);
  this.onlyPhone = this.onlyPhone.bind(this);
  }
  
  detectStage() {
    switch(this.state.stage) {
      case 1:
      document.getElementById('stageOneBanner').style.backgroundColor = '#BEE2FD';
      document.getElementById('stageOneBanner').style.borderColor = '#BEE2FD';
      document.getElementById('stageOneBanner').style.color = '#022959';
      document.getElementById('stageTwoBanner').style.backgroundColor = 'transparent';
      document.getElementById('stageTwoBanner').style.borderColor = '#FFF';
      document.getElementById('stageTwoBanner').style.color = '#FFF';
      document.getElementById('stageThreeBanner').style.backgroundColor = 'transparent';
      document.getElementById('stageThreeBanner').style.borderColor = '#FFF';
      document.getElementById('stageThreeBanner').style.color = '#FFF';
      document.getElementById('stageFourBanner').style.backgroundColor = 'transparent';
      document.getElementById('stageFourBanner').style.borderColor = '#FFF';
      document.getElementById('stageFourBanner').style.color = '#FFF';
      break;
      case 2:
        document.getElementById('stageOneBanner').style.backgroundColor = 'transparent';
        document.getElementById('stageOneBanner').style.borderColor = '#FFF';
        document.getElementById('stageOneBanner').style.color = '#FFF';
        document.getElementById('stageTwoBanner').style.backgroundColor = '#BEE2FD';
        document.getElementById('stageTwoBanner').style.borderColor = '#BEE2FD';
        document.getElementById('stageTwoBanner').style.color = '#022959';
        document.getElementById('stageThreeBanner').style.backgroundColor = 'transparent';
        document.getElementById('stageThreeBanner').style.borderColor = '#FFF';
        document.getElementById('stageThreeBanner').style.color = '#FFF';
        document.getElementById('stageFourBanner').style.backgroundColor = 'transparent';
        document.getElementById('stageFourBanner').style.borderColor = '#FFF';
        document.getElementById('stageFourBanner').style.color = '#FFF';
      break;
      case 3:
        document.getElementById('stageOneBanner').style.backgroundColor = 'transparent';
        document.getElementById('stageOneBanner').style.borderColor = '#FFF';
        document.getElementById('stageOneBanner').style.color = '#FFF';
        document.getElementById('stageTwoBanner').style.backgroundColor = 'transparent';
        document.getElementById('stageTwoBanner').style.borderColor = '#FFF';
        document.getElementById('stageTwoBanner').style.color = '#FFF';
        document.getElementById('stageThreeBanner').style.backgroundColor = '#BEE2FD';
        document.getElementById('stageThreeBanner').style.borderColor = '#BEE2FD';
        document.getElementById('stageThreeBanner').style.color = '#022959';
        document.getElementById('stageFourBanner').style.backgroundColor = 'transparent';
        document.getElementById('stageFourBanner').style.borderColor = '#FFF';
        document.getElementById('stageFourBanner').style.color = '#FFF';
      break;
      case 4:
        document.getElementById('stageOneBanner').style.backgroundColor = 'transparent';
        document.getElementById('stageOneBanner').style.borderColor = '#FFF';
        document.getElementById('stageOneBanner').style.color = '#FFF';
        document.getElementById('stageTwoBanner').style.backgroundColor = 'transparent';
        document.getElementById('stageTwoBanner').style.borderColor = '#FFF';
        document.getElementById('stageTwoBanner').style.color = '#FFF';
        document.getElementById('stageThreeBanner').style.backgroundColor = 'transparent';
        document.getElementById('stageThreeBanner').style.borderColor = '#FFF';
        document.getElementById('stageThreeBanner').style.color = '#FFF';
        document.getElementById('stageFourBanner').style.backgroundColor = '#BEE2FD';
        document.getElementById('stageFourBanner').style.borderColor = '#BEE2FD';
        document.getElementById('stageFourBanner').style.color = '#022959';
      break;
      case 5:
        document.getElementById('stageOneBanner').style.backgroundColor = 'transparent';
        document.getElementById('stageOneBanner').style.borderColor = '#FFF';
        document.getElementById('stageOneBanner').style.color = '#FFF';
        document.getElementById('stageTwoBanner').style.backgroundColor = 'transparent';
        document.getElementById('stageTwoBanner').style.borderColor = '#FFF';
        document.getElementById('stageTwoBanner').style.color = '#FFF';
        document.getElementById('stageThreeBanner').style.backgroundColor = 'transparent';
        document.getElementById('stageThreeBanner').style.borderColor = '#FFF';
        document.getElementById('stageThreeBanner').style.color = '#FFF';
        document.getElementById('stageFourBanner').style.backgroundColor = '#BEE2FD';
        document.getElementById('stageFourBanner').style.borderColor = '#BEE2FD';
        document.getElementById('stageFourBanner').style.color = '#022959';
      break;
      default:
        break;
    }
  }

  onlyLettersAndSpaces(str) {
    return /^[A-Za-z\s]*$/.test(str);
  }

  onlyEmail(email) {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  onlyPhone(phone) {
    return String(phone)
    .match(
      /^(\+|\d)[0-9]{7,16}$/
    );
  }

  increaseStage() {
    let name = this.state.name;
    let email = this.state.email;
    let phone = this.state.phone;
    switch(this.state.stage) {
      case 1:
        document.getElementById('name').defaultValue = name;
        document.getElementById('email').defaultValue = email;
        document.getElementById('phone').defaultValue = phone;

        if(!name || !this.onlyLettersAndSpaces(name) || !name.includes(' ')) {
          if(!name) {
            document.getElementById('nameError').innerHTML = 'This field cannot be empty.';
          } else if(!name.includes(' ')) {
            document.getElementById('nameError').innerHTML = 'Please enter your full name.';
          } else if(!this.onlyLettersAndSpaces(name)) {
            document.getElementById('nameError').innerHTML = 'Please only use letters and spaces.';
          }
          document.getElementById('name').style.borderColor = '#EE374A';
          document.getElementById('nameError').style.display = 'block';
        } else if(!email || !this.onlyEmail(email)) {
          if(!email) {
            document.getElementById('emailError').innerHTML = 'This field cannot be empty.';
          } else if(!this.onlyEmail(email)) {
            document.getElementById('emailError').innerHTML = 'Please enter a valid Email Adress.';
          }
          document.getElementById('email').style.borderColor = '#EE374A';
          document.getElementById('emailError').style.display = 'block';
        } else if(!phone || !this.onlyPhone(phone)) {
          if(!phone) {
            document.getElementById('phoneError').innerHTML = 'This field cannot be empty.';
          } else if(!this.onlyPhone(phone)) {
            document.getElementById('phoneError').innerHTML = 'Please enter a valid Phonenumber.';
          }
          document.getElementById('phone').style.borderColor = '#EE374A';
          document.getElementById('phoneError').style.display = 'block';
        }

        if(name && this.onlyLettersAndSpaces(name) && name.includes(' ')) {
          document.getElementById('name').style.borderColor = '#D6D9E6';
          document.getElementById('nameError').style.display = 'none';
        }

        if(email && this.onlyEmail(email)) {
          document.getElementById('email').style.borderColor = '#D6D9E6';
          document.getElementById('emailError').style.display = 'none';
        }

        if(phone && this.onlyPhone(phone)) {
          document.getElementById('phone').style.borderColor = '#D6D9E6';
          document.getElementById('phoneError').style.display = 'none';
        }

        if(name && this.onlyLettersAndSpaces(name) && name.includes(' ') && email && this.onlyEmail(email) && phone && this.onlyPhone(phone)) {
          this.setState({...this.state, stage: (this.state.stage + 1)});
          setTimeout(this.detectStage, 100);
        }
        break;
      case 2:

        break;
      case 3:

        break;
      case 4:

        break;
      case 5:

        break;
      default:
        break;
    }
    //if(this.state.stage < 5) {
      //this.setState({...this.state, stage: (this.state.stage + 1)});
      //setTimeout(this.detectStage, 100);
    //}
  }

  decreaseStage() {
    let name = this.state.name;
    let email = this.state.email;
    let phone = this.state.phone;
    switch(this.state.stage) {
      case 1:
        break;
 
      case 2:
        this.setState({...this.state, stage: (this.state.stage - 1)});
        setTimeout(this.detectStage, 100);
        break;
      case 3:

        break;
      case 4:

        break;
      case 5:

        break;
      default:
        break;
    }
    //if(this.state.stage > 1) {
      //this.setState({...this.state, stage: (this.state.stage - 1)});
      //setTimeout(this.detectStage, 100);
    //}
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

  handlePlanSelect(event) {
      this.setState({...this.state, plan: (event.target.id)});
  }

  opacityOn() {
    document.getElementById('ArcadeFreeMonths').style.opacity = '1';
    document.getElementById('AdvancedFreeMonths').style.opacity = '1';
    document.getElementById('ProFreeMonths').style.opacity = '1';
  }

  handleBillingCheckbox(event) {
    if(event.target.checked) {
      document.getElementById('chooseMonthly').style.color = '#9699AA';
      document.getElementById('chooseYearly').style.color = '#022959';
      document.getElementById('Arcade').style.maxHeight = '11.5vh';
      document.getElementById('Advanced').style.maxHeight = '11.5vh';
      document.getElementById('Pro').style.maxHeight = '11.5vh';
      document.getElementById('ArcadeGhostDiv').style.display = 'block';
      document.getElementById('AdvancedGhostDiv').style.display = 'block';
      document.getElementById('ProGhostDiv').style.display = 'block';
      document.getElementById('ArcadeFreeMonths').style.visibility = 'visible';
      document.getElementById('AdvancedFreeMonths').style.visibility = 'visible';
      document.getElementById('ProFreeMonths').style.visibility = 'visible';
      document.getElementById('ArcadePrice').innerHTML = '$90/yr';
      document.getElementById('AdvancedPrice').innerHTML = '$120/yr';
      document.getElementById('ProPrice').innerHTML = '$150/yr';
      setTimeout(this.opacityOn, 100);
      this.setState({...this.state, billing: 'Yearly'});
    } else {
      document.getElementById('chooseMonthly').style.color = '#022959';
      document.getElementById('chooseYearly').style.color = '#9699AA';
      document.getElementById('Arcade').style.maxHeight = '9.5vh';
      document.getElementById('Advanced').style.maxHeight = '9.5vh';
      document.getElementById('Pro').style.maxHeight = '9.5vh';
      document.getElementById('ArcadeFreeMonths').style.opacity = '0';
      document.getElementById('AdvancedFreeMonths').style.opacity = '0';
      document.getElementById('ProFreeMonths').style.opacity = '0';
      document.getElementById('ArcadeFreeMonths').style.visibility = 'hidden';
      document.getElementById('AdvancedFreeMonths').style.visibility = 'hidden';
      document.getElementById('ProFreeMonths').style.visibility = 'hidden';
      document.getElementById('ArcadeGhostDiv').style.display = 'none';
      document.getElementById('AdvancedGhostDiv').style.display = 'none';
      document.getElementById('ProGhostDiv').style.display = 'none';
      document.getElementById('ArcadePrice').innerHTML = '$9/mo';
      document.getElementById('AdvancedPrice').innerHTML = '$12/mo';
      document.getElementById('ProPrice').innerHTML = '$15/mo';
      this.setState({...this.state, billing: 'Monthly'});
    }
  }


  render() {
    return <Background
             increaseStage={this.increaseStage}
             decreaseStage={this.decreaseStage}
             stage={this.state.stage}
             handleNameChange={this.handleNameChange}
             handleEmailChange={this.handleEmailChange}
             handlePhoneChange={this.handlePhoneChange}
             handlePlanSelect={this.handlePlanSelect}
             handleBillingCheckbox={this.handleBillingCheckbox}
             plan={this.state.plan}
             name={this.state.name}
             email={this.state.email}
             phone={this.state.phone}
             />;
  }
}

export default App;
