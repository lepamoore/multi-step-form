import React from "react";
import './Background.css';
import Topbar from "../Topbar/Topbar";
import Botbar from "../Botbar/Botbar";
import StageOne from "../Stages/StageOne/StageOne";
import StageTwo from '../Stages/StageTwo/StageTwo';
import StageThree from "../Stages/StageThree/StageThree";
import StageFour from '../Stages/StageFour/StageFour';
import StageFive from '../Stages/StageFive/StageFive';

class Background extends React.Component {
    constructor(props) {
        super(props);

        this.stageToRender = this.stageToRender.bind(this);
        this.prevButtonVisible = this.prevButtonVisible.bind(this);
    }

   

    stageToRender() {
        switch(this.props.stage) {
            case 1:
                return  <StageOne 
                handleNameChange={this.props.handleNameChange}
                handleEmailChange={this.props.handleEmailChange}
                handlePhoneChange={this.props.handlePhoneChange}
                name={this.props.name}
                email={this.props.email}
                phone={this.props.phone}
                />;

            case 2:
                return <StageTwo 
                    handlePlanSelect={this.props.handlePlanSelect}
                    handleBillingCheckbox={this.props.handleBillingCheckbox} 
                    plan={this.props.plan}
                    billing={this.props.billing}
                    />;
            
            case 3:
                return <StageThree
                    billing={this.props.billing}
                    handlePickAddon={this.props.handlePickAddon}
                    onlineService={this.props.onlineService}
                    largerStorage={this.props.largerStorage}
                    customProfile={this.props.customProfile}
                     />;

            case 4:
                return <StageFour
                        billing={this.props.billing} 
                        plan={this.props.plan}
                        onlineService={this.props.onlineService}
                        largerStorage={this.props.largerStorage}
                        customProfile={this.props.customProfile}
                        handleBackToStageTwo={this.props.handleBackToStageTwo}
                        />;

            case 5:
                return <StageFive />;

            default:
                break;
        }
    }

    prevButtonVisible() {
        if(this.props.stage > 1) {
            return true;
        } else {
            return false;
        }
    }

    render() {
        return(
            <div id="BackgroundWrapper">
                <Topbar />
                {this.stageToRender()}
                <Botbar 
                increaseStage={this.props.increaseStage}
                decreaseStage={this.props.decreaseStage}
                prevButtonVisible={this.prevButtonVisible()}
                />
            </div>
        );
    }
}

export default Background;