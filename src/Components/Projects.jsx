import { Button, StylesProvider } from "@material-ui/core"
import React, { useState } from "react"
import styles from "./project.module.css" 
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Zoom from 'react-reveal/Zoom';


const Projects=()=>{
    const [open,setOpen] = useState(false)
    const [open1,setOpen1] = useState(false)
    const [open2,setOpen2] = useState(false)
        const handleOpen = () => {
          setOpen(true);
        };
      
        const handleOpen1 = () => {
            setOpen1(true);
          };
          const handleOpen2 = () => {
            setOpen2(true);
          }; 

        const handleClose = () => {
          setOpen(false);
        };
        const handleClose1 = () => {
            setOpen1(false);
          };
          const handleClose2 = () => {
            setOpen2(false);
          };
      
        const body = (
          <div className={styles.modal}>
              <ul>
                <li><h3>BBc Clone</h3></li>
                <li><h5>BBC is World's largest news network providing and gathering news around the world</h5></li>
                <li><h5>Completed in 4 days with a team of total 3 web developers.</h5></li>
                <li><h5>Tech Stack: React,React-Redux, Html, Css</h5></li>
                <li><h5>My role: Planning the implementation and creating functional pages. Appointed as leader of the team.</h5></li>
              </ul>
              <div className={styles.btn}>
                <a href="https://github.com/priyanka-890/BBC-clone" style={{textDecoration:"none"}}><Button variant="contained" color="primary">View SourceCode</Button></a>
              </div>
          </div>
        );

        const body1 = (
            <div className={styles.modal}>
              <ul>
                <li><h3>Sugar Cosmetics Clone</h3></li>
                <li><h5>Sugar Cosmetics is India's leading Beauty product company with website reagrding the same.</h5></li>
                <li><h5>Completed in 4 days with a team of total 3 web developers.</h5></li>
                <li><h5>Tech Stack: JavaScript, Html, Css</h5></li>
                <li><h5>My role: Planning the implementation and creating functional pages. Appointed as leader of the team.Secured 4th positions among all teams</h5></li>
              </ul>
              <div className={styles.btn}>
                <a href="https://github.com/AbhinavRajSing/Carbon_SugarCosmetics" style={{textDecoration:"none"}}><Button variant="contained" color="primary">View SourceCode</Button></a>
              </div>
            </div>
          );

          const body2 = (
            <div className={styles.modal}>
                <ul>
                <li><h3>MyNetDiary Clone</h3></li>
                <li><h5>MyNetDiary is India's diet plan web app , helping their users to plan their diet and stay healthy.</h5></li>
                <li><h5>Completed in 4 days with a team of total 3 web developers.</h5></li>
                <li><h5>Tech Stack: JavaScript, Html, Css</h5></li>
                <li><h5>My role: Planning the implementation and creating functional pages. Appointed as leader of the team.</h5></li>
              </ul>
              <div className={styles.btn}>
                <a href="https://github.com/AbhinavRajSing/magnesium" style={{textDecoration:"none"}}><Button variant="contained" color="primary">View SourceCode</Button></a>
              </div>
            </div>
          );
    return(
        <div className={styles.wrappermain} id="project">
            <div className={styles.wrapperhead}>
                <h2>MY WORKS</h2>
                <hr/>
            </div>
            <div className={styles.wrapperproject}>
            <Zoom bottom>
                <div className={styles.singleproject}>
                    <div className={styles.singleprojectimg}>
                        <img src="https://camo.githubusercontent.com/55627b484f0ad06aa8e8da29adb414d3ee832ba197d880773ee3ee24ea5a3599/68747470733a2f2f7467646f776e2e65752d67622e6d79626c75656d69782e6e65742f373830353532313433393835303433322f323032312d30332d31355f31303a31303a32312e6a7067" className={styles.img}/>
                    </div>
                    <div className={styles.singleprojectcontent}>
                        <div className={styles.singleprojectbutton}>
                            <Button  variant="contained" color="secondary" style={{margin:"5px"}} onClick={handleOpen}>Know More</Button>
                            <Button variant="contained" color="secondary" style={{margin:"5px"}}>View Demo</Button>
                        </div>
                    </div>
                </div>
                </Zoom>
                <Zoom bottom>
                <div className={styles.singleproject}>
                <div className={styles.singleprojectimg}>
                        <img src="https://camo.githubusercontent.com/9c790a8d6e3dde6a54424a6713b76d6768d55907288e643cc31f26ef41c49024/68747470733a2f2f7467646f776e2e65752d67622e6d79626c75656d69782e6e65742f343535313932393039343330373737362f323032312d30322d30365f30393a35333a33312e6a7067" className={styles.img}/>
                    </div>
                    <div className={styles.singleprojectcontent}>
                        <div className={styles.singleprojectbutton}>
                            <Button  variant="contained" color="secondary" style={{margin:"5px"}} onClick={handleOpen1}>Know More</Button>
                            <Button variant="contained" color="secondary" style={{margin:"5px"}}>View Demo</Button>
                        </div>
                    </div>
                </div>
                </Zoom>
                <Zoom bottom>
                <div className={styles.singleproject}>
                <div className={styles.singleprojectimg}>
                        <img src="netdiary.png" className={styles.img}/>
                    </div>
                    <div className={styles.singleprojectcontent}>
                        <div className={styles.singleprojectbutton}>
                            <Button  variant="contained" color="secondary" style={{margin:"5px"}} onClick={handleOpen2}>Know More</Button>
                            <Button variant="contained" color="secondary" style={{margin:"5px"}}>View Demo</Button>
                        </div>
                    </div>
                </div>
                </Zoom>
            </div>

            <div>
                <Modal open={open} onClose={handleClose}>
                    {body}
                </Modal>
            </div>
            <div>
                <Modal open={open1} onClose={handleClose1}>
                    {body1}
                </Modal>
            </div>
            <div>
                <Modal open={open2} onClose={handleClose2}>
                    {body2}
                </Modal>
            </div>

        </div>
    )
}
export default Projects