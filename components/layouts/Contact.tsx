import React from 'react';
import Styles from '../../Styles/Contact.module.css'; // Import the CSS module
import Button from '../Button';
import links from '../../globals/links';
import SectionHeader from '../SectionHeader';

const Contact = () => {
  return (
    <div id='contact' className={Styles.contact}>
      <SectionHeader title='contact' />
      <p className={Styles.description}>
        If you would like to get in touch, please feel free to contact me using one of the methods below.
      </p>
      <div className={Styles.buttons}>
        <Button
          className={Styles.button}
          text='Email'
          link={links.email}
          textColor='white'
          buttonColor='#00BFB2'
          svgSrc='/EmailVector.svg'
          svgAlt='Email'></Button>
        <Button
          className={Styles.button}
          text='Linked In'
          link={links.linkedin}
          textColor='white'
          buttonColor='#0077b5'
          svgSrc='/LinkedInVector.svg'
          svgAlt='Contact Book'></Button>
        <Button
          className={Styles.button}
          text='GitHub'
          link={links.github}
          textColor='white'
          buttonColor='black'
          svgSrc='/GithubVector.svg'
          svgAlt='Octopuss - Github Mascot'></Button>
      </div>
    </div>
  );
};

export default Contact;
