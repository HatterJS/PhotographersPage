import React from "react";
import '../css/navBar.css';
import icoFb from '../img/ico/fb.gif';
import icoInstagram from '../img/ico/insta.gif';

class NavBar extends React.Component {
    render() {
        return(
            <div className="navBar">
                <div className="navBar__logo"><a href="https://www.instagram.com/mr.hatter.photo/" target="_blank" rel="noreferrer"><h3>Mr.Hatter</h3></a></div>
                {/* <div className="navBar__filler"></div> */}
                <div className="navBar__menu">
                    <div className="navBar__sort navBar__menuItem">Sort</div>
                    <div className="navBar__filter navBar__menuItem">Filter</div>
                    <div className="navBar__filter navBar__menuItem">Contacts</div>
                </div>
                <div className="navBar__socialNetwork">
                    <a href="https://www.facebook.com/KarpinchikAlexey" target="_blank" rel="noreferrer"><img src={icoFb} alt="fb" className="navBar__icoFB" /></a>
                    <a href="https://www.instagram.com/mr.hatter.photo/" target="_blank" rel="noreferrer"><img src={icoInstagram} alt="instagram" className="navBar__icoInstagram" /></a>
                </div>
            </div>
        );
    }
}

export default NavBar;