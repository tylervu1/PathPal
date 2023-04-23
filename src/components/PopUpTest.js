import React from 'react'

function PopUpTest(props) {
  return (props.trigger) ? (
    <div className='popup'>
        <div className='popup-inner'>
            <h1>Popup</h1>
            <button>close me</button>     
            {props.children}
        </div>
    </div>
  ) : "";
}

export default PopUpTest