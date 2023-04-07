import React from "react";
import './Botbar.css';

class Botbar extends React.Component {
    constructor(props) {
        super(props);

        this.toggleButtonVisible = this.toggleButtonVisible.bind(this);
        this.toggleButtonOpacity = this.toggleButtonOpacity.bind(this);
    }

    toggleButtonVisible() {
        if(this.props.prevButtonVisible === true) {
            return 'visible';
        } else {
            return 'hidden';
        }
    }

    toggleButtonOpacity() {
        if(this.props.prevButtonVisible === true) {
            return '1';
        } else {
            return '0';
        }
    }

    render() {
        return(
            <div id="BotbarWrapper">
                <button id="BotbarButtonBack" style={{visibility: this.toggleButtonVisible(), opacity: this.toggleButtonOpacity()}} onClick={this.props.decreaseStage}>Go Back</button>
                <button id="BotbarButtonNext" onClick={this.props.increaseStage}>Next Step</button>
            </div>
        );
    }
}

export default Botbar;