import { Button } from "@material-ui/core"
import React from "react"
import styles from "./about.module.css";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const About =()=>{
    const handleLinkedIn=()=>{
        window.open("https://www.linkedin.com/in/abhinav-raj-14b714169/","_blank",'height=700,width=600,left=10,top=10,,scrollbars=yes,menubar=no');
    }
    const handleGit=()=>{
        window.open("https://github.com/AbhinavRajSing","_blank",'height=700,width=600,left=10,top=10,,scrollbars=yes,menubar=no');
    }
    return(
        <>
            {/* <div className={styles.wrappermain} > */}
                <div className={styles.wrapperlayer} id="about">
                    
                
                    <div className={styles.wrapperpic}>
                        <img src="mypiccrop.png"  className={styles.mypic}/>
                    </div>
                    <div className={styles.wrapperabout}>
                        
                            <h2 style={{color:"pink"}}>Hello, My name is Abhinav Raj and <br/>I am a FullStack Web Developer. </h2>
                            <h4 style={{color:"white"}}>I completed my Bachlore of Engineering from<br/> SJCIT Bangalore and wanted to learn more in Development.
                                After <br/>some time I came to know about MASAI where I learnt the whole<br/> fullstack web development. 
                                Through my portfolio you will get to know about <br/>my skills and projects.
                            </h4>
                            <div className={styles.icons}>
                                <a  className={styles.button} href="https://drive.google.com/file/d/1tT5qki_7V9Wls4ItNPTZp2kal2UjCZOT/view?usp=sharing"><Button variant="contained" color="secondary" >Download Resume</Button></a>
                                <div className={styles.eachicons}>
                                    <LinkedInIcon onClick={handleLinkedIn}/>
                                    <GitHubIcon onClick={handleGit}/>
                                </div>
                            </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    )
}
export default About