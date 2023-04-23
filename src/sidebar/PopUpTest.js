import React from 'react'

export default function PopUpTest(props) {
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
