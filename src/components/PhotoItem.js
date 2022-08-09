import React from "react";
import '../css/photoItem.css';

class PhotoItem extends React.Component {
    handleUnfold = (e) => {
        const photoItems = document.querySelectorAll('.photoItem');
        if (e.target.classList.contains('photoItem__rightArea')) {   
            for (let i=0; i<photoItems.length; i++) {
                photoItems[i].classList.remove('active');
            }
            e.currentTarget.nextSibling.classList.add('active');
        } else if (e.target.classList.contains('photoItem__leftArea')) {   
            for (let i=0; i<photoItems.length; i++) {
                photoItems[i].classList.remove('active');
            }
            e.currentTarget.previousSibling.classList.add('active');
        } else {   
            for (let i=0; i<photoItems.length; i++) {
                photoItems[i].classList.remove('active');
            }
            e.currentTarget.classList.add('active');            
        }
        console.log(e.currentTarget.nextSibling);  
    }
    render () {
        return (
            <div className="photoItem" onClick={this.handleUnfold}>
                <div className="photoItem__Content" style={{backgroundImage: `url(${this.props.itemsImageSrc})`}}>
                    <div className="photoItem__leftArea"><div className="photoItem__leftArrow"></div></div>
                    <div className="photoItem__rightArea"><div className="photoItem__rightArrow"></div></div>
                    <div className="photoItem__lightShade"></div>
                    <div className="photoItem__darkShade"></div>
                </div>
                <div className="photoItem__Description">
                    <header>
                        <h3>{this.props.itemsTitle || 'no Title'}</h3>
                    </header>
                    <p style={{color: 'black'}}>{this.props.itemsDescription || 'no Content'}</p>
                </div>
            </div>
        );
    }
}

export default PhotoItem;