import React from "react";
import './StageOne.css';

class StageOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            phone: ''
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
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
        return(
            <div id="StageOneWrapper">
                <h1 id="StageOneHeading">Personal info</h1>
                <p id="StageOneParagraph">Please provide your name, email adress, and phone number.</p>
                <form>
                    <label htmlFor="name" className="StageOnelabels">Name</label>
                    <input type="text" id="name" className="StageOneinputs" placeholder="e.g. Stephen King" onChange={this.handleNameChange} required></input>
                    <label htmlFor="email" className="StageOnelabels">Email Adress</label>
                    <input type="email" id="email" className="StageOneinputs" placeholder="e.g. stephenking@lorem.com" onChange={this.handleEmailChange} required></input>
                    <label htmlFor="phone" className="StageOnelabels">Phone Number</label>
                    <input type="tel" id="phone" className="StageOneinputs" placeholder="e.g. +1 234 567 890" onChange={this.handlePhoneChange} required></input> 
                </form>
            </div>
        );
    }
}

export default StageOne;