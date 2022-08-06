import React from "react";
import '../css/photoItem.css';

class PhotoItem extends React.Component {
    render () {
        return (
            <div className="photoItem">
                <div className="photoItem__Content" style={{backgroundImage: `url(${this.props.itemsImageSrc})`}}>
                    {/* <img className="photoItem__picture" src={this.props.itemsImageSrc} alt="Sorry!"></img> */}
                    <div className="photoItem__lightShade"></div>
                    <div className="photoItem__darkShade"></div>
                </div>
                <div className="photoItem__Description">
                    <header>
                        <h3>{this.props.itemsTitle || 'no Title'}</h3>
                    </header>
                    <article>
                        {/* <p>{this.props.itemsDescription || 'no Content'}</p> */}
                    </article>
                </div>
            </div>
        );
    }
}

export default PhotoItem;