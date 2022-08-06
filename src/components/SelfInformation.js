import React from "react";
import '../css/selfInformation.css';

class SelfInformation extends React.Component {
    render() {
        return (
            <div className='selfInformation'>
                <div className='selfInformation__avatar'></div>
                <div className='selfInformation__description'></div>
            </div>
        );
    }
}

export default SelfInformation;