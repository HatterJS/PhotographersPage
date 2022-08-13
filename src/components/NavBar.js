import React from "react";
import '../css/navBar.css';
import icoFb from '../img/ico/fb.gif';
import icoInstagram from '../img/ico/insta.gif';

const sortMenu = ['Date', 'Name', 'Rating'];
const filterMenu = ['Shaw all', 'Lendscape', 'Macro', 'Animals', 'Motion'];

function handleNavigation(e) {
    const photoItem = document.querySelectorAll('.photoItem');
    const currentMenuItem = e.target.firstChild.textContent.toLowerCase();
    photoItem.forEach(e => {
        if (currentMenuItem === 'shaw all') {
            e.style.display = '';
        } else if (e.getAttribute('category') === currentMenuItem) {
            e.style.display = '';
        } else {
            e.style.display = 'none';
        }
    })
}

class NavBar extends React.Component {
    render() {
        return(
            <nav className="navBar">
                <div className="navBar__logo"><a href="https://www.instagram.com/mr.hatter.photo/" target="_blank" rel="noreferrer"><h3>Mr.Hatter</h3></a></div>
                <ul onClick={handleNavigation}>
                    <li>Sort
                        <ul>
                            {sortMenu.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </li>
                    <li>Filter                        
                        <ul>
                            {filterMenu.map(item => <li key={item}>{item}</li>)}
                        </ul>
                    </li>
                    <li>Contacts</li>
                </ul>
                <div className="navBar__socialNetwork">
                    <a href="https://www.facebook.com/KarpinchikAlexey" target="_blank" rel="noreferrer"><img src={icoFb} alt="fb" className="navBar__icoFB" /></a>
                    <a href="https://www.instagram.com/mr.hatter.photo/" target="_blank" rel="noreferrer"><img src={icoInstagram} alt="instagram" className="navBar__icoInstagram" /></a>
                </div>
            </nav>
        );
    }
}

export default NavBar;