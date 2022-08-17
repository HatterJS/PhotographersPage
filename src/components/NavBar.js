import React from "react";
import '../css/navBar.css';
import itemList from "./itemList";
import icoFb from '../img/ico/fb.gif';
import icoInstagram from '../img/ico/insta.gif';
import PhotoItem from "./PhotoItem";

const sortMenu = ['Date', 'Name', 'Rating'];
const filterMenu = ['Shaw all', 'Lendscape', 'Macro', 'Animals', 'Motion'];

function handleFilter(e) {
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
    for (let i=0; i<e.currentTarget.children.length; i++) {
        e.currentTarget.children[i].style = '';
    }
    e.currentTarget.style.fontWeight = '';
    e.target.style.fontWeight = '700';
}

function compareTitle(a, b) {
    let lowerA = a.title.toLowerCase();
    let lowerB = b.title.toLowerCase();
    if (lowerA < lowerB) {
        return -1;
    }
    if (lowerA > lowerB) {
        return 1;
    }
    return 0;
}
function compareDate(a, b) {
    return a.date - b.date;
}

class NavBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {itemList}
    }

    handleSort = (e) => {
        if (e.target.textContent==='Name') {
            this.setState(itemList.sort(compareTitle));
        }
        if (e.target.textContent==='Date') {
            this.setState(itemList.sort(compareDate));
        }
        for (let i=0; i<e.currentTarget.children.length; i++) {
            e.currentTarget.children[i].style = '';
        }
        e.currentTarget.style.fontWeight = '';
        e.target.style.fontWeight = '700';
    }

    render() {
        return(
            <>
                <header>
                    <nav className="navBar">
                        <div className="navBar__logo"><a href="/" rel=""><h3>Mr.Hatter</h3></a></div>
                        <ul>
                            <li><div className="menuTitle">Sort</div >
                                <ul onClick={this.handleSort}>
                                    {sortMenu.map(item => <li key={item}>{item}</li>)}
                                </ul>
                            </li>
                            <li><div className="menuTitle">Filter</div >                       
                                <ul onClick={handleFilter}>
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
                </header>
                <main>
                    <div className='galleryBlock'>
                    {itemList.map(item =>
                        <PhotoItem 
                        key={item.title} 
                        itemsTitle = {item.title} 
                        itemsDescription = {item.description} 
                        itemsImageSrc = {item.image} 
                        itemCategory = {item.category} 
                        itemRating = {item.rating} 
                        itemDate = {item.date}
                        />)
                    }
                    </div>
                </main>
            </>
        );
    }
}

export default NavBar;