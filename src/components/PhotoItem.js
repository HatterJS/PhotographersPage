import React from "react";
import '../css/photoItem.css';

class PhotoItem extends React.Component {
    handleUnfold = (e) => {
        const photoItems = document.querySelectorAll('.photoItem');
        for (let i=0; i<photoItems.length; i++) {
            photoItems[i].classList.remove('active');
        }
        e.currentTarget.classList.add('active');
        console.log(e.currentTarget.classList);
        console.log(photoItems);
    }
    render () {
        return (
            <div className="photoItem" onClick={this.handleUnfold}>
                <div className="photoItem__Content" style={{backgroundImage: `url(${this.props.itemsImageSrc})`}}>
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