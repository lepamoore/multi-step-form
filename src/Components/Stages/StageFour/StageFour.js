import React from "react";
import './StageFour.css';

class StageFour extends React.Component {
    constructor(props) {
        super(props);

        this.returnBillingStringOne = this.returnBillingStringOne.bind(this);
        this.returnBillingStringTwo = this.returnBillingStringTwo.bind(this);
        this.returnBillingStringThree = this.returnBillingStringThree.bind(this);
        this.returnSelectedBilling = this.returnSelectedBilling.bind(this);
        this.returnSelectedBillingTwo = this.returnSelectedBillingTwo.bind(this);
        this.returnPlanPrice = this.returnPlanPrice.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
    }

    returnBillingStringOne() {
        if(this.props.billing === 'Yearly') {
            return '+$10/yr';
        } else if(this.props.billing === 'Monthly') {
            return '+$1/mo';
        }
    }

    returnBillingStringTwo() {
        if(this.props.billing === 'Yearly') {
            return '+$20/yr';
        } else if(this.props.billing === 'Monthly') {
            return '+$2/mo';
        }
    }

    returnBillingStringThree() {
        if(this.props.billing === 'Yearly') {
            return '+$20/yr';
        } else if(this.props.billing === 'Monthly') {
            return '+$2/mo';
        }
    }

    returnSelectedBilling() {
        if(this.props.billing === 'Monthly') {
            return '(Monthly)';
        } else if(this.props.billing === 'Yearly') {
            return '(Yearly)';
        }
    }

    returnSelectedBillingTwo() {
        if(this.props.billing === 'Monthly') {
            return '(per month)';
        } else if(this.props.billing === 'Yearly') {
            return '(per year)';
        }
    }

    returnPlanPrice() {
        if(this.props.plan === 'Arcade') {
            if(this.props.billing === 'Monthly') {
                return '$9/mo';
            } else if(this.props.billing === 'Yearly') {
                return '$90/yr';
            }
        } else if(this.props.plan === 'Advanced') {
            if(this.props.billing === 'Monthly') {
                return '$12/mo';
            } else if(this.props.billing === 'Yearly') {
                return '$120/yr';
            }
        } else if(this.props.plan === 'Pro') {
            if(this.props.billing === 'Monthly') {
                return '$15/mo';
            } else if(this.props.billing === 'Yearly') {
                return '$150/yr';
            }
        }
    }

    calculateTotal() {
        let totalArr = [];
        if(this.props.plan === 'Arcade') {
            totalArr.push(9);
        } else if(this.props.plan === 'Advanced') {
            totalArr.push(12);
        } else if(this.props.plan === 'Pro') {
            totalArr.push(15);
        }
        if(this.props.onlineService) {
            totalArr.push(1);
        }
        if(this.props.largerStorage) {
            totalArr.push(2);
        }
        if(this.props.customProfile) {
            totalArr.push(2);
        }
        let total = totalArr.reduce((Accumulator, currentValue) => Accumulator + currentValue, 0);
        
        if(this.props.billing === 'Monthly') {
            return `$${total}/mo`;
        } else if(this.props.billing === 'Yearly') {
            return `$${total * 10}/yr`;
        }
    }

    render() {
        return (
            <div id="StageFourWrapper">
                <h1 id="StageFourHeading">Finishing up</h1>
                <p id="StageFourParagraph">Double-check everything looks OK before confirming.</p>
                <div id="StageFourDetailsWrapper">
                    <div id="StageFourPlanDiv">
                        <div className="">
                            <h2 id="StageFourPlanTitle">{`${this.props.plan} ${this.returnSelectedBilling()}`}</h2>
                            <p id="StageFourChangeLink" onClick={this.props.handleBackToStageTwo}>Change</p>
                        </div>
                        <div className="flexDiv">
                            <span id="StageFourPlanPrice">{this.returnPlanPrice()}</span>
                        </div>
                    </div>
                    <div id="StageFourAddonsDiv">
                        <div className="StageFourAddonDiv" id="FinishingAddonOne"><span className="StageFourAddonName">Online service</span><span className="StageFourAddonPrice">{this.returnBillingStringOne()}</span></div>
                        <div className="StageFourAddonDiv" id="FinishingAddonTwo"><span className="StageFourAddonName">Larger Storage</span><span className="StageFourAddonPrice">{this.returnBillingStringTwo()}</span></div>
                        <div className="StageFourAddonDiv" id="FinishingAddonThree"><span className="StageFourAddonName">Customizable profile</span><span className="StageFourAddonPrice">{this.returnBillingStringThree()}</span></div>
                    </div>
                </div>
                <div id="StageFourTotalDiv">
                    <div><span id="TotalText">{`Total ${this.returnSelectedBillingTwo()}`}</span></div>
                    <div><span id="TotalPrice">{this.calculateTotal()}</span></div>
                </div>
            </div>
        );
    }
}

export default StageFour;