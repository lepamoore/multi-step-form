import React from "react";
import './Topbar.css';

class Topbar extends React.Component {

    render() {
        return (
            <div id="TopbarWrapper">
                <div id="container">
                    <div className="TopbarAlignDiv">
                        <div className="numberDiv" id="stageOneBanner">1</div>
                        <div className='TopbarTextDivs' id="TopbarTextDivOne">
                            <p className='stepParagraph'>STEP 1</p>
                            <p className='stepTitle'>YOUR INFO</p>
                        </div>
                    </div>
                    <div className="TopbarAlignDiv">
                        <div className="numberDiv" id="stageTwoBanner">2</div>
                        <div className='TopbarTextDivs' id="TopbarTextDivTwo">
                            <p className='stepParagraph'>STEP 2</p>
                            <p className='stepTitle'>SELECT PLAN</p>
                        </div>
                    </div>
                    <div className="TopbarAlignDiv">
                        <div className="numberDiv" id="stageThreeBanner">3</div>
                        <div className='TopbarTextDivs' id="TopbarTextDivThree">
                            <p className='stepParagraph'>STEP 3</p>
                            <p className='stepTitle'>ADD-ONS</p>
                        </div>
                    </div>
                    <div className="TopbarAlignDiv">
                        <div className="numberDiv" id="stageFourBanner">4</div>
                        <div className='TopbarTextDivs' id="TopbarTextDivFour">
                            <p className='stepParagraph'>STEP 4</p>
                            <p className='stepTitle'>SUMMARY</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Topbar;