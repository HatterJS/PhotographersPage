import React from "react";
import '../css/selfInformation.css';
import avatar from '../img/avatar.gif'

class SelfInformation extends React.Component {
    render() {
        return (
            <div className='selfInformation'>
                <div className='selfInformation__avatar'>
                    <figure>
                        <img className="avatarImage" src={avatar} alt='missed'></img>
                        {/* <figcaption><h4 className="avatarImage-sign">Mr.Hatter</h4></figcaption> */}
                    </figure>
                </div>
                <div className='selfInformation__description'>
                    <h2>Mr.Hatter</h2>
                    <h4>About</h4>
                    <p>I wasn't one of those people who was given a camera at age five and fell in love with photography.</p><br/>
                    <p>I was a travel journalist, working my dream job with Lonely Planet at age 23 when the magic of Marrakech begged me to take its photo.</p><br/>
                    <p>I prefer to let the photos do the talking so if you wish to know more just ask via <span className="mailLink">hatter3ds@gmail.com</span>, I'd love to hear from you.</p>
                </div>
                <div className='selfInformation__statistics'>
                    <h2>followers</h2>
                    <h2>777k</h2><br/>
                    <h2>photos</h2>
                    <h2>365</h2><br/>
                    <h2>likes</h2>
                    <h2>985B</h2>
                </div>
            </div>
        );
    }
}

export default SelfInformation;