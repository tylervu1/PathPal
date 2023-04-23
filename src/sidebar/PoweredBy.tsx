import React from 'react'
import styles from '@/sidebar/PoweredBy.module.css'
import Header from '@/sidebar/header.svg'
import { tr } from '@/translation/Translation'
import { TiMap, TiWarning, TiCog } from "react-icons/ti";
import { Link } from 'react-router-dom';



import { useState } from "react";
//forgive me 
interface Props {
    title: string;
    children: React.ReactNode;
}
import "./Modal.css";

function Modal({ setOpenModal }: { setOpenModal: (open: boolean) => void }) {
    return (
      <div className="modalBackground">
        <div className="modalContainer">
          <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
          <div className="title">
            <h1>PLEASE END MY SUFFERING</h1>
          </div>
          <div className="body">
            <p>GIVE THE RABBIT A CARROT?</p>
          </div>
          <div className="footer">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
              id="cancelBtn"
            >
              NO
            </button>
            <button>YES</button>
          </div>
        </div>
      </div>
    );
  }

  // forgive me 
  
  // this is the settings page 
  function OtherModal({ setOpenModal }: { setOpenModal: (open: boolean) => void }) {
    return (
      <div className="modalBackground">
        <div className="modalContainer">
        <div className="titleCloseBtn">
            <button
              onClick={() => {
                setOpenModal(false);
              }}
            >
              X
            </button>
          </div>
            <div className='settingsWrapper'>
            
          <div className='userInformation'>
          <h1>User Profile</h1>
            <div className='personalInfo'>
                <ul>
                    <li>Name: Joe Mahma</li>
                    <li>Phone: 999-999-999</li>
                </ul>
                
            </div>
            <div className='emergancyContacts'>
                <div>
                    <ul>
                        <li>Andy Arse: 949-234-1233</li>
                        <li>Biggy Beeb: 949-123-3333</li>
                        <li>Chilly Chi: 949-212-1873</li>
                    </ul>
                </div>
            </div>
            <div className = 'addContact'>
                
            </div>
          </div>
          </div>
          <div className='bread'>
                    <div className='lettuce'>
                        
                                <input className="cheese" placeholder='Name'></input>
                                <input className="cheese" placeholder='Phone Number'></input>

                    </div>
                    <button className="cheese2">Add Emergancy Contact</button>
                </div>
        </div>
        
      </div>
    );
  }

export default function PoweredBy() {
    const [modalOpen, setModalOpen] = useState(false);
    const [otherModalOpen, setOtherModalOpen] = useState(false);
    return (
        <div className={styles.poweredByContainer}>
            <div className = {styles.navBarHeHe}>
                <ul className = {styles.navBarHeHeList}>
                    <li onClick={()=>{}}><TiMap className={styles.openModalBtn}/>Map</li>
                    <li onClick={()=>{setModalOpen(true);}}><TiWarning className={styles.openModalBtn}/>Help</li>
                    <li onClick={()=>{setOtherModalOpen(true);}}><TiCog className={styles.openModalBtn}/>Settings</li>
                </ul>
            </div>
            <div className={styles.modalContainerUwu}>
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
            {otherModalOpen && <OtherModal setOpenModal={setOtherModalOpen} />}
            </div>
        </div>
    )
}
