import React from "react"
import styles from "./skills.module.css"

const Skills =()=>{
    return(
        <div className={styles.wrappermain} id="skills">
            <div className={styles.wrapperhead}>
                <h2>MY SKILLS</h2>
                <hr/>
            </div>
            <div className={styles.wrapperskills}>
                <div  className={styles.wrapperskillset}>
                    <img src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" className={styles.img}/>
                </div>
                <div className={styles.wrapperskillset}>
                <img src="https://www.w3.org/html/logo/downloads/HTML5_1Color_White.png" className={styles.img}/>
                </div>
                <div className={styles.wrapperskillset}>
                <img src="https://www.shariqueweb.com/wp-content/uploads/2015/06/css3.png" className={styles.img}/>
                </div>
                <div className={styles.wrapperskillset}>
                <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" className={styles.img}/>
                </div>
                <div className={styles.wrapperskillset}>
                <img src="http://assets.stickpng.com/thumbs/58481021cef1014c0b5e494b.png" className={styles.img}/>
                </div >
            </div>
        </div>
    )
}
export default Skills