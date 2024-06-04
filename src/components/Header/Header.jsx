import React from 'react'
import styles from './header.module.css'
import homeSVG from'./assets/home.svg'
import modelsSVG from './assets/models.svg'
import videosSVG from './assets/videos.svg'
import civitaiLogo from './assets/civitai.jpg'



function Header() {
  console.log('Header component rendered!');

    return (
        <div className={styles.headerContainer}>
        <div className={styles.topHeader}>

            <div className={styles.headerImage}>
                <img src={civitaiLogo} alt=""/>
            </div>
        </div>

        <div className={styles.headerOptionsContainer}>
            <ul className={styles.headerOptions}>
                <li><img className={`${styles.invertColor} ${styles.headerOptionsSVG}`} src={homeSVG}/>Home</li>
                <li><img className={`${styles.invertColor} ${styles.headerOptionsSVG}`} src={modelsSVG}/>Models</li>
                <li><img className={`${styles.invertColor} ${styles.headerOptionsSVG}`} src={videosSVG}/>Videos</li>
            </ul>
        </div>
    </div>
    )
}

export default Header
