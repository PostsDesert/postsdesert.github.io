import React from 'react';
import Styles from '../styles/Button.module.css';


const Button = ({svgSrc, svgAlt, text, className, textColor, buttonColor, link}) => {
    const isInternalLink = link.startsWith('#');
    return (
      <a href={link} target={isInternalLink ? '_self' : '_blank'} rel="noreferrer">
      <button 
        className={`${Styles.button} ${className}`} 
        style={{backgroundColor: buttonColor, color: textColor}}
        type='button'>
        <span className={Styles.buttonText}>{text}</span>
        <img className={Styles.buttonIcon} style={{height:'1.2em'}} src={svgSrc} alt={svgAlt} />
      </button>
      </a>
    )
}

export default Button