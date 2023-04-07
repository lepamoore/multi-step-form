import React from "react";
import './Background.css';
import Topbar from "../Topbar/Topbar";
import Botbar from "../Botbar/Botbar";
import StageOne from "../Stages/StageOne";

class Background extends React.Component {
    constructor(props) {
        super(props);

        this.stageToRender = this.stageToRender.bind(this);
        this.prevButtonVisible = this.prevButtonVisible.bind(this);
    }

    stageToRender() {
        if(this.props.stage === 1) {
            return <StageOne 
                    handleNameChange={this.props.handleNameChange}
                    handleEmailChange={this.props.handleEmailChange}
                    handlePhoneChange={this.props.handlePhoneChange}
                    />;
        } else {
            return;
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