import React from "react";
import './Topbar.css';

class Topbar extends React.Component {

    render() {
        return (
            <div id="TopbarWrapper">
                <div id="container">
                    <div className="numberDiv" id="stageOneBanner">1</div>
                    <div className="numberDiv" id="stageTwoBanner">2</div>
                    <div className="numberDiv" id="stageThreeBanner">3</div>
                    <div className="numberDiv" id="stageFourBanner">4</div>
                </div>
            </div>
        );
    }
}

export default Topbar;