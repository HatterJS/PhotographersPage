import React from "react";
import '../css/selfInformation.css';
import avatarLeft from '../img/avatarLeft.gif';
import avatarRight from '../img/avatarRight.gif';

import Clock from "./Clock";

class SelfInformation extends React.Component {
    selfInformationSwitch(e) {
        const selfInformation = document.querySelectorAll('.selfInformation-left, .selfInformation-right');
        if (e.target.classList[0] === 'avatarImage-right') {
            selfInformation[1].classList.add('activeInformation');
            selfInformation[0].classList.remove('activeInformation');
        }
        if (e.target.classList[0] === 'avatarImage-left') {
            selfInformation[0].classList.add('activeInformation');
            selfInformation[1].classList.remove('activeInformation');
        }
    }
    render() {
        return (
            <header className="header" onClick={this.selfInformationSwitch}>
                <div className='selfInformation-left activeInformation'>
                    <div>
                        <img className="avatarImage-left" src={avatarLeft} alt='avatar'></img>
                    </div>
                    <div className='selfInformation__description-left'>
                        <h3>Mr.Hatter</h3>
                        <h4>About</h4>
                        <p>I wasn't one of those people who was given a camera at age five and fell in love with photography.</p>
                        <p>I prefer to let the photos do the talking so if you wish to know more just ask via <span className="mailLink">hatter3ds@gmail.com</span>, I'd love to hear from you.</p>
                    </div>
                    <div className='selfInformation__statistics'>
                        <Clock /><br/>
                        <h2>photos</h2>
                        <h2>365</h2><br/>
                        <h2>likes</h2>
                        <h2>985B</h2>
                    </div>
                </div>
                <div className="selfInformation-right">
                    <div className='selfInformation__description-right'>
                        <h3>Mr.Hatter</h3>
                        <h4>About</h4>
                        <p>I wasn't one of those people who was given a camera at age five and fell in love with photography.</p>
                        <p>I prefer to let the photos do the talking so if you wish to know more just ask via <span className="mailLink">hatter3ds@gmail.com</span>, I'd love to hear from you.</p>
                    </div>
                    <div>
                        <img className="avatarImage-right" src={avatarRight} alt='missed'></img>
                    </div>
                </div>
            </header>
        );
    }
}

export default SelfInformation;