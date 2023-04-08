import React from "react";
import Addons from "./AddonsComponent/Addons";
import './StageThree.css';

class StageThree extends React.Component {

    render() {
        return (
            <div id="StageThreeWrapper">
                <h1 id="StageThreeHeading">Pick add-ons</h1>
                <p id="StageThreeParagraph">Add-ons help enhance your gaming experience.</p>
                
                <Addons
                billing={this.props.billing}
                addonPrice={1}
                AddonsHeading='Online service'
                AddonsParagraph='Access to multiplayer games'
                id='addonOne'
                handlePickAddon={this.props.handlePickAddon}
                addonStatus={this.props.onlineService}
                />

                <Addons
                billing={this.props.billing}
                addonPrice={2}
                AddonsHeading='Larger storage'
                AddonsParagraph='Extra 1TB of cloud save'
                id="addonTwo"
                handlePickAddon={this.props.handlePickAddon}
                addonStatus={this.props.largerStorage}
                />

                <Addons
                billing={this.props.billing}
                addonPrice={2}
                AddonsHeading='Customizable profile'
                AddonsParagraph='Custom theme on your profile'
                id='addonThree'
                handlePickAddon={this.props.handlePickAddon}
                addonStatus={this.props.customProfile}
                />

            </div>
        );
    }
}

export default StageThree