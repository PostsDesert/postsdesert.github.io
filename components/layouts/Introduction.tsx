import React from "react"
import Styles from "../../styles/Introduction.module.css"
import Button from "../Button"
import links from "../../globals/links"

// This component will change its position in the jsx layout depending on the screen size
const CallToActionButtons = ({className}) => (
  <div className={`${Styles.buttonsContainer} ${className}`}>
    <Button 
      className={Styles.button} 
      text='View Resume' 
      link={links.resume}
      textColor='white'
      buttonColor='#3D8ACB'
      svgSrc='/ResumeVector.svg' 
      svgAlt='Document page'></Button>
    <Button 
      className={Styles.button} 
      text='Get in Touch' 
      link={links.contact}
      textColor='white'
      buttonColor='#3D8ACB'
      svgSrc='/ContactVector.svg' 
      svgAlt='Contact Book'></Button>
</div>
)

const Introduction = () => (
  <section className={Styles.introduction}>
    <div className={Styles.textContainer}>
      <h1 className={Styles.name}>Griffith Baker</h1>
      <p className={Styles.description}>
        A <b style={{color: '#2B65AD'}}>Computer Science Major</b> with a passion for 
        <b style={{color: '#2B65AD'}}> full-stack engineering</b>.
      </p>
      <CallToActionButtons className={Styles.buttonsInsideTextContainer}/>
    </div>
    <div className={Styles.profileImageContainer}>
      <img className={Styles.profileImage} src='/profile-image.jpg' alt="Profile picture" />
    </div>
    <CallToActionButtons className={Styles.buttonsOutsideTextContainer}/>
  </section>
)

export default Introduction