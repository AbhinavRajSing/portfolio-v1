import React from "react"
import styles from "./contact.module.css"
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import PhoneIcon from '@material-ui/icons/Phone';
import emailjs from "emailjs-com"
import { TextField } from "@material-ui/core";


const Contact=()=>{

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_z7h9rfe', e.target, 'user_0HuTllxa2fbQx91xwvlyM')
        .then((result) => {
            alert("Message successfully sent"+"\n"+"Thank you for contacting")
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()

    }

    return(
      <div className={styles.wrappermain} id="contact">
          <div className={styles.wrapperhead}>
            <h3>CONTACT</h3>
            <hr/>
          </div>
          <div className={styles.wrappercontact}>
              <form className={styles.wrappercontactform} onSubmit={sendEmail}>
                  <h4>Write an Email to me for contacting or hiring purpose.</h4>
                  <div className={styles.text1}>
                    <TextField variant="outlined" name="name" label="Name" style={{width:"100%"}}></TextField>
                </div>

                <div className={styles.text2}>
                    <TextField variant="outlined" name="email" label="Email" className={styles.text2}></TextField>
                </div >

                <div className={styles.text3}>
                    <TextField variant="outlined" name="subject" label="Subject" className={styles.text3}></TextField>
                </div>

                <div className={styles.text4}>
                    <TextField variant="outlined" name="message" label="Message" className={styles.text4}></TextField>
                </div>
                <input type="submit" className={styles.submit} value="Send"></input>
            </form>
          </div>
      </div>
    )
}
export default Contact