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
                    <input type="text" value={this.props.name} id="name" className="StageOneinputs" placeholder="e.g. Stephen King" onChange={this.props.handleNameChange} required></input>
                    <span id="nameError"></span>
                    <label htmlFor="email" className="StageOnelabels">Email Adress</label>
                    <input type="email" value={this.props.email} id="email" className="StageOneinputs" placeholder="e.g. stephenking@lorem.com" onChange={this.props.handleEmailChange} required></input>
                    <span id="emailError">Please check your entries in the field above.</span>
                    <label htmlFor="phone" className="StageOnelabels">Phone Number</label>
                    <input type="tel" value={this.props.phone} id="phone" className="StageOneinputs" placeholder="e.g. +1 234 567 890" onChange={this.props.handlePhoneChange} required></input> 
                    <span id="phoneError">Please check your entries in the field above.</span>
                </form>
            </div>
        );
    }
}

export default StageOne;