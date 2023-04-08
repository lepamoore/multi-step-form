import React from "react";
import './Addons.css';

class Addons extends React.Component {
    constructor(props) {
        super(props);

        this.priceCalc = this.priceCalc.bind(this);
    }

    priceCalc() {
        if(this.props.billing === 'Monthly') {
            return `+$${this.props.addonPrice}/mo`;
        } else if(this.props.billing === 'Yearly') {
            return `+$${this.props.addonPrice * 10}/yr`;
        }
    }

    render() {
        return (
                <div className="AddonsWrapper" id={this.props.id}>
                    <div className="AddonsDetailsContainer">
                        <input type='checkbox' className='AddonsCheck' id={`${this.props.id}Checkbox`} onClick={this.props.handlePickAddon} defaultChecked={this.props.addonStatus}></input>
                        <div className="AddonsTextContainer">
                            <h2 className="AddonName">{this.props.AddonsHeading}</h2>
                            <p className="AddonParagraph">{this.props.AddonsParagraph}</p>
                        </div>
                    </div>
                    <div className="AddonsPriceDiv">
                        <span className="AddonsPrice">{this.priceCalc()}</span>
                    </div>
            </div>
        );
    }
}

export default Addons;