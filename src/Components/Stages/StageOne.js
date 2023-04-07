import React from "react";
import './StageOne.css';

class StageOne extends React.Component {

    render() {
        return(
            <div id="StageOneWrapper">
                <h1 id="StageOneHeading">Personal info</h1>
                <p id="StageOneParagraph">Please provide your name, email adress, and phone number.</p>
                <form>
                    <label htmlFor="name" className="StageOnelabels">Name</label>
                    <input type="text" id="name" className="StageOneinputs" placeholder="e.g. Stephen King" onChange={this.props.handleNameChange} required></input>
                    <label htmlFor="email" className="StageOnelabels">Email Adress</label>
                    <input type="email" id="email" className="StageOneinputs" placeholder="e.g. stephenking@lorem.com" onChange={this.props.handleEmailChange} required></input>
                    <label htmlFor="phone" className="StageOnelabels">Phone Number</label>
                    <input type="tel" id="phone" className="StageOneinputs" placeholder="e.g. +1 234 567 890" onChange={this.props.handlePhoneChange} required></input> 
                </form>
            </div>
        );
    }
}

export default StageOne;