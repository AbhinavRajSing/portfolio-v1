import React from "react"
import styles from "./contact.module.css"
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';

const Contact=()=>{
    return(
        <div className={styles.wrappermain}>
            <div className={styles.wrapperhead}>
                <h2>Contact</h2>
                <hr/>
            </div>
            <div className={styles.wrappercontact}>
                <div className={styles.singlecontact}>
                    <div className={styles.singles}>
                        <AlternateEmailIcon style={{color:"white",fontSize:"50px"}}></AlternateEmailIcon>
                        <h3>Gmail: rajabhinav13nov@gmail.com</h3>
                    </div>
                </div>
                <div className={styles.singlecontact}>
                <div className={styles.singles}>
                        <h3>SOCIAL</h3>
                        <a href="https://www.linkedin.com/in/abhinav-raj-14b714169/"><LinkedInIcon style={{color:"white",margin:"5px",fontSize:"50px"}}/></a>
                        <a href="https://github.com/AbhinavRajSing"><GitHubIcon style={{color:"white",margin:"5px",fontSize:"50px"}}/></a>
                    </div>
                </div>
                <div className={styles.singlecontact}>
                <div className={styles.singles}>
                        <h3>Phone</h3>
                        <PhoneIcon style={{color:"white",fontSize:"50px"}}/>
                        <h3>Number: 8920011090</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact