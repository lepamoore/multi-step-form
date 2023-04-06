import React from "react";
import './Background.css';
import Topbar from "../Topbar/Topbar";
import Botbar from "../Botbar/Botbar";
import StageOne from "../Stages/StageOne";

class Background extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stage: 1
        };

        this.stageToRender = this.stageToRender.bind(this);
    }

    stageToRender() {
        if(this.state.stage === 1) {
            return <StageOne />;
        } else {
            return;
        }
    }

    render() {
        return(
            <div id="BackgroundWrapper">
                <Topbar />
                {this.stageToRender()}
                <Botbar />
            </div>
        );
    }
}

export default Background;