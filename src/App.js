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
      billing: 'Monthly',
      onlineService: false,
      largerStorage: false,
      customProfile: false,
      countdownDidRun: false,
      countdownDidStart: false
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
  this.handlePickAddon = this.handlePickAddon.bind(this);
  this.activateNextStep = this.activateNextStep.bind(this);
  this.StageFourButtonCountdown = this.StageFourButtonCountdown.bind(this);
  this.displayFinishingAddons = this.displayFinishingAddons.bind(this);
  this.handleBackToStageTwo = this.handleBackToStageTwo.bind(this);
  this.colorAddonWithActiveState = this.colorAddonWithActiveState.bind(this);
  this.clearAllIntervals = this.clearAllIntervals.bind(this);
  this.setCountDownDidRun = this.setCountDownDidRun.bind(this);
  this.setCountDownDidStart = this.setCountDownDidStart.bind(this);
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
        if(this.state.countdownDidStart) {
        this.clearAllIntervals();
        document.getElementById("BotbarButtonNext").innerHTML = "Next Step";
        document.getElementById("BotbarButtonNext").style.backgroundColor = "#022959";
        this.setState({...this.state, countdownDidStart: false});
        }
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
        this.colorAddonWithActiveState();
        if(this.state.countdownDidStart) {
        this.clearAllIntervals();
        document.getElementById("BotbarButtonNext").innerHTML = "Next Step";
        document.getElementById("BotbarButtonNext").style.backgroundColor = "#022959";
        this.setState({...this.state, countdownDidStart: false});
        } 
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
        this.displayFinishingAddons();
        this.setState({...this.state, countdownDidStart: true});
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
          if(!this.state.plan) {
          document.getElementById('BotbarButtonNext').style.backgroundColor = '#9699AA';
          }
        }
        break;
      case 2:
        if(this.state.plan) {
          this.setState({...this.state, stage: (this.state.stage + 1)});
          setTimeout(this.detectStage, 100);
        }
        break;
      case 3:
        document.getElementById('BotbarButtonNext').style.backgroundColor = "#9699AA";
        document.getElementById('BotbarButtonNext').innerHTML = "5";
        this.setState({...this.state, stage: (this.state.stage + 1), countdownDidRun: false});
        setTimeout(this.detectStage, 100);
        this.StageFourButtonCountdown();
        break;
      case 4:
        document.getElementById('BotbarButtonNext').style.backgroundColor = "#9699AA";
        if(this.state.countdownDidRun) {
          this.setState({...this.state, stage: (this.state.stage + 1)});
          document.getElementById('BotbarWrapper').style.display = 'none';
          setTimeout(this.detectStage, 100);
        }
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
    switch(this.state.stage) {
      case 1:
        break;
 
      case 2:
        this.setState({...this.state, stage: (this.state.stage - 1)});
        setTimeout(this.detectStage, 100);
        break;
      case 3:
        this.setState({...this.state, stage: (this.state.stage - 1)});
        setTimeout(this.detectStage, 100);
        break;
      case 4:
        this.setState({...this.state, stage: (this.state.stage - 1)});
        setTimeout(this.detectStage, 100);
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
    this.activateNextStep();
  }

  handleEmailChange(event) {
    this.setState({...this.state, email: event.target.value});
    this.activateNextStep();
  }

  handlePhoneChange(event) {
    this.setState({...this.state, phone: event.target.value});
    this.activateNextStep();
  }

  handlePlanSelect(event) {
      this.setState({...this.state, plan: (event.target.id)});
      document.getElementById('BotbarButtonNext').style.backgroundColor = '#022959';
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

  handlePickAddon(event) {
    if(event.target.checked) {
      if(event.target.id.includes('One')) {
        document.getElementById('addonOne').style.borderColor = '#483EFF';
        document.getElementById('addonOne').style.backgroundColor = '#F8F9FF';
        this.setState({...this.state, onlineService: true});
      } else if(event.target.id.includes('Two')) {
        document.getElementById('addonTwo').style.borderColor = '#483EFF';
        document.getElementById('addonTwo').style.backgroundColor = '#F8F9FF';
        this.setState({...this.state, largerStorage: true});
      } else if(event.target.id.includes('Three')) {
        document.getElementById('addonThree').style.borderColor = '#483EFF';
        document.getElementById('addonThree').style.backgroundColor = '#F8F9FF';
        this.setState({...this.state, customProfile: true});
      }
    } else if(!event.target.checked) {
      if(event.target.id.includes('One')) {
        document.getElementById('addonOne').style.borderColor = '#D6D9E6';
        document.getElementById('addonOne').style.backgroundColor = '#FFF';
        this.setState({...this.state, onlineService: false});
      } else if(event.target.id.includes('Two')) {
        document.getElementById('addonTwo').style.borderColor = '#D6D9E6';
        document.getElementById('addonTwo').style.backgroundColor = '#FFF';
        this.setState({...this.state, largerStorage: false});
      } else if(event.target.id.includes('Three')) {
        document.getElementById('addonThree').style.borderColor = '#D6D9E6';
        document.getElementById('addonThree').style.backgroundColor = '#FFF';
        this.setState({...this.state, customProfile: false});
      }
    }
  }

  colorAddonWithActiveState() {
    if(this.state.onlineService) {
      document.getElementById('addonOne').style.borderColor = '#483EFF';
      document.getElementById('addonOne').style.backgroundColor = '#F8F9FF';
    } 
    if(this.state.largerStorage) {
      document.getElementById('addonTwo').style.borderColor = '#483EFF';
      document.getElementById('addonTwo').style.backgroundColor = '#F8F9FF';
    }
    if(this.state.customProfile) {
      document.getElementById('addonThree').style.borderColor = '#483EFF';
      document.getElementById('addonThree').style.backgroundColor = '#F8F9FF';
    }
  }

  activateNextStep() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
      if(name && this.onlyLettersAndSpaces(name) && name.includes(' ') && email && this.onlyEmail(email) && phone && this.onlyPhone(phone)) {
        document.getElementById('BotbarButtonNext').style.backgroundColor = '#022959';
      }

  }

  setCountDownDidRun() {
    this.setState({...this.state, countdownDidRun: true});
  }

  setCountDownDidStart() {
    this.setState({...this.state,  countdownDidStart: true});
  }
  

  StageFourButtonCountdown() {
    let timeleft = 5;
    const downloadTimer = setInterval(function(){
      if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("BotbarButtonNext").innerHTML = "Confirm";
        document.getElementById("BotbarButtonNext").style.backgroundColor = "#483EFF";
        this.setCountDownDidRun();
      } else {
        document.getElementById("BotbarButtonNext").innerHTML = timeleft;
      }
      timeleft -= 1;
    }.bind(this), 1000);
  }

  displayFinishingAddons() {
    if(this.state.onlineService || this.state.largerStorage || this.state.customProfile) {
      document.getElementById('StageFourPlanDiv').style.borderColor = '#9699AA';
    }
    if(this.state.onlineService) {
      document.getElementById('FinishingAddonOne').style.display = 'block';
    }
    if(this.state.largerStorage) {
      document.getElementById('FinishingAddonTwo').style.display = 'block';
    }
    if(this.state.customProfile) {
      document.getElementById('FinishingAddonThree').style.display = 'block';
    }
  }

  handleBackToStageTwo() {
    this.setState({...this.state, stage: 2});
    setTimeout(this.detectStage, 100);
  }

  clearAllIntervals() {
    // Get a reference to the last interval + 1
    const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);

    // Clear any timeout/interval up to that id
    for (let i = 1; i < interval_id; i++) {
      window.clearInterval(i);
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
             billing={this.state.billing}
             handlePickAddon={this.handlePickAddon}
             onlineService={this.state.onlineService}
             largerStorage={this.state.largerStorage}
             customProfile={this.state.customProfile}
             handleBackToStageTwo={this.handleBackToStageTwo}
             />;
  }
}

export default App;
