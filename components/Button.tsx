
import React from 'react';
import Styles from '../styles/Button.module.css';


const Button = ({svgSrc, svgAlt, text, className, textColor, buttonColor, link}) => {
    const isInternalLink = link.startsWith('#');
    return (
      <button 
        className={`${Styles.button} ${className}`} 
        style={{backgroundColor: buttonColor, color: textColor}}
        onClick={() => isInternalLink ? window.open(link, '_self') : window.open(link, '_blank')}
        type='button'>
        <span className={Styles.buttonText}>{text}</span>
        <img className={Styles.buttonIcon} style={{height:'1.2em'}} src={svgSrc} alt={svgAlt} />
      </button>
    )
}

export default Button