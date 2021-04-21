import { Button } from "@material-ui/core"
import React from "react"
import styles from "./about.module.css"

const About =()=>{
    return(
        <>
            <div className={styles.wrappermain}>
                <div className={styles.wrapperlayer}>
                    
                
                    <div className={styles.wrapperpic}>
                        <img src="mypiccrop.png"  className={styles.mypic}/>
                    </div>
                    <div className={styles.wrapperabout}>
                        
                            <h2 style={{color:"pink"}}>Hello, My name is Abhinav Raj and <br/>I am a FullStack Web Developer. </h2>
                            <h4 style={{color:"white"}}>I completed my Bachelores of Engineering from<br/> SJCIT Bangalore and wanted to learn more in Developement.
                                After <br/>some time I came to know about MASAI where I learnt the whole<br/> fullstack web development. 
                                In My portfolio you will get to know about <br/>my skills and projects.
                            </h4>
                            <a  className={styles.button} href="https://drive.google.com/file/d/1tT5qki_7V9Wls4ItNPTZp2kal2UjCZOT/view?usp=sharing"><Button variant="contained" color="secondary" >Download Resume</Button></a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About