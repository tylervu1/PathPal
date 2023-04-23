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

export default function PoweredBy() {
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className={styles.poweredByContainer}>
            <div className = {styles.navBarHeHe}>
                <ul className = {styles.navBarHeHeList}>
                    <li onClick={()=>{}}><TiMap className={styles.openModalBtn}/>Map</li>
                    <li onClick={()=>{setModalOpen(true);}}><TiWarning className={styles.openModalBtn}/>Help</li>
                    <li onClick={()=>{setModalOpen(true);}}><TiCog className={styles.openModalBtn}/>Settings</li>
                </ul>
            </div>
            <div className={styles.modalContainerUwu}>
            {modalOpen && <Modal setOpenModal={setModalOpen} />}
            </div>
        </div>
    )
}
