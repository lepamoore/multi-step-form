import React from "react";
import './Topbar.css';

class Topbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="TopbarWrapper">
                <div id="container">
                    <div className="numberDiv" id="selected">1</div>
                    <div className="numberDiv">2</div>
                    <div className="numberDiv">3</div>
                    <div className="numberDiv">4</div>
                </div>
            </div>
        );
    }
}

export default Topbar;