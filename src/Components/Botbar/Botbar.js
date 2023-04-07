import React from "react";
import './Botbar.css';

class Botbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggleButtonVisible = this.toggleButtonVisible.bind(this);
    }

    toggleButtonVisible() {
        if(this.props.prevButtonVisible === true) {
            return 'visible';
        } else {
            return 'hidden';
        }
    }

    render() {
        return(
            <div id="BotbarWrapper">
                <button id="BotbarButtonBack" style={{visibility: this.toggleButtonVisible()}}>Go Back</button>
                <button id="BotbarButtonNext" onClick={this.props.increaseStage}>Next Step</button>
            </div>
        );
    }
}

export default Botbar;