import React from "react";
import './Botbar.css';

class Botbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div id="BotbarWrapper">
                <button id="BotbarButtonBack">Go Back</button>
                <button id="BotbarButtonNext">Next Step</button>
            </div>
        );
    }
}

export default Botbar;