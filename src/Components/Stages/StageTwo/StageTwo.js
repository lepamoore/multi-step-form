import React from "react";
import PlanToSelect from "./PlanComponent/PlanToSelect";
import './StageTwo.css';

class StageTwo extends React.Component {
    constructor(props) {
        super(props);

        this.ArcadeBorderColor = this.ArcadeBorderColor.bind(this);
        this.ArcadeBgColor = this.ArcadeBgColor.bind(this);
        this.AdvancedBorderColor = this.AdvancedBorderColor.bind(this);
        this.AdvancedBgColor = this.AdvancedBgColor.bind(this);
        this.ProBorderColor = this.ProBorderColor.bind(this);
        this.ProBgColor = this.ProBgColor.bind(this);
        this.saveBilling = this.saveBilling.bind(this);
    }

    ArcadeBorderColor() {
        if(this.props.plan === 'Arcade') {
            return '#483EFF';
        } else {
            return'#D6D9E6';
        }
    }

    ArcadeBgColor() {
        if(this.props.plan === 'Arcade') {
            return '#F8F9FF';
        } else {
            return'#FFF';
        }
    }

    AdvancedBorderColor() {
        if(this.props.plan === 'Advanced') {
            return '#483EFF';
        } else {
            return'#D6D9E6';
        }
    }

    AdvancedBgColor() {
        if(this.props.plan === 'Advanced') {
            return '#F8F9FF';
        } else {
            return'#FFF';
        }
    }

    ProBorderColor() {
        if(this.props.plan === 'Pro') {
            return '#483EFF';
        } else {
            return'#D6D9E6';
        }
    }

    ProBgColor() {
        if(this.props.plan === 'Pro') {
            return '#F8F9FF';
        } else {
            return'#FFF';
        }
    }

    saveBilling() {
        if(this.props.billing === 'Yearly') {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return (
            <div id="StageTwoWrapper">
                <h1 id="StageTwoHeading">Select your plan</h1>
                <p id="StageTwoParagraph">You have the option of monthly or yearly billing.</p>
                <PlanToSelect 
                planHeading='Arcade' 
                planPrice='9'
                handlePlanSelect={this.props.handlePlanSelect}
                bgColor={this.ArcadeBgColor()}
                brColor={this.ArcadeBorderColor()} ></PlanToSelect>
                <PlanToSelect 
                planHeading='Advanced' 
                planPrice='12'
                handlePlanSelect={this.props.handlePlanSelect}
                bgColor={this.AdvancedBgColor()}
                brColor={this.AdvancedBorderColor()} ></PlanToSelect>
                <PlanToSelect 
                planHeading='Pro' 
                planPrice='15'
                handlePlanSelect={this.props.handlePlanSelect}
                bgColor={this.ProBgColor()}
                brColor={this.ProBorderColor()} ></PlanToSelect>
                <div id="chooseLength">
                    <span id="chooseMonthly">Monthly</span>
                    <label className="switch">
                        <input type="checkbox" onChange={this.props.handleBillingCheckbox} id='billingCheckbox' checked={this.saveBilling()}/>
                        <span className="slider round"></span>
                    </label>
                    <span id="chooseYearly">Yearly</span>
                </div>
            </div>
        );
    }
}

export default StageTwo;