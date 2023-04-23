import React from 'react'
import styles from '@/sidebar/PoweredBy.module.css'
import Header from '@/sidebar/header.svg'
import { tr } from '@/translation/Translation'
import { TiMap, TiWarning, TiCog } from "react-icons/ti";
import { Link } from 'react-router-dom';


export default function PoweredBy() {
    return (
        <div className={styles.poweredByContainer}>
            <div className = {styles.navBarHeHe}>
                <ul className = {styles.navBarHeHeList}>
                    <li onClick={()=>{}}><TiMap className={styles.iconYuh}/>Map</li>
                    <li onClick={()=>{}}><TiWarning className={styles.iconYuh}/>Help</li>
                    <li onClick={()=>{}}><TiCog className={styles.iconYuh}/>Settings</li>
                </ul>
            </div>
        </div>
    )
}
