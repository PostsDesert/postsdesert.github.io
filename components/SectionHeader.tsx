
import React from 'react';
import Styles from '../styles/SectionHeader.module.css';


const SectionHeader = ({title}) => (
        <h2 className={Styles.title}><span className={Styles.hashtagAccent}>#</span>{title}</h2>
)

export default SectionHeader