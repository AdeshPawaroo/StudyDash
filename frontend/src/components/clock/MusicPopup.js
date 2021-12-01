import React from 'react'
import './Popup.css'
function musicPopup(props) {

    return (props.trigger2) ? (
        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger2(false)}>X</button>
                { props.children}
            </div>
            
        </div>
    ) : '';
}

export default musicPopup
