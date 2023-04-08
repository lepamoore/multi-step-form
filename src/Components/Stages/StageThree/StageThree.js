import React from "react";
import Addons from "./AddonsComponent/Addons";
import './StageThree.css';

class StageThree extends React.Component {

    render() {
        return (
            <div id="StageThreeWrapper">
                <h1 id="StageThreeHeading">Select your plan</h1>
                <p id="StageThreeParagraph">You have the option of monthly or yearly billing.</p>
                
                <Addons
                billing={this.props.billing}
                addonPrice={1}
                AddonsHeading='Online service'
                AddonsParagraph='Access to multiplayer games'
                id='addonOne'
                handlePickAddon={this.props.handlePickAddon}
                />

                <Addons
                billing={this.props.billing}
                addonPrice={2}
                AddonsHeading='Larger storage'
                AddonsParagraph='Extra 1TB of cloud save'
                id="addonTwo"
                handlePickAddon={this.props.handlePickAddon}
                />

                <Addons
                billing={this.props.billing}
                addonPrice={2}
                AddonsHeading='Customizable profile'
                AddonsParagraph='Custom theme on your profile'
                id='addonThree'
                handlePickAddon={this.props.handlePickAddon}
                />

            </div>
        );
    }
}

export default StageThree