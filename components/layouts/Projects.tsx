import React from 'react';
import Project from './Project';
import Styles from '../../styles/Projects.module.css';
import links from '../../globals/links'
import SectionHeader from '../SectionHeader';

const projects = [
  {
    title: 'SmartFit - InStryde',
    subtitle: 'MAKING ORTHOPEDICS MORE ACCESSIBLE THROUGH MACHINE LEARNING',
    description: 'Developed for InStryde, this frontend scanning software uses Real-Time ML to capture images without user interaction.\n \
    In addition to the frontend software, there’s an accurate yet scalable backend to extract precise data points from 2D images. \n \
    Additional projects I’ve worked on with InStryde include an Order management system, ML analytics dashboard, and database management.',
    image: '/FootScan_demo.png',
    button: {
      text: 'Try the Product',
      link: 'https://instryde.com',
      svgSrc: '/ShoePrintVector.svg',
      svgAlt: 'Shoe Print',
      textColor: 'white',
      buttonColor: 'black',
    }
  },
  {
    title: 'SimpleC',
    subtitle: 'A SIMPLE LANGUAGE COMPILER',
    description: 'The SimpleC compiler compiles a custom programming language into Java or x86-64 (AT&T style) assembly code.\n \
    It supports many critical compiler features including lexical analysis, syntactic analysis, semantic analysis, and intermediate/target code generation.\n \
    Through implementation of the above compiler features, I was able to additionally add name analysis and compile-time error checking.',
    image: '/SimpleC_demo.png',
    button: {
      text: 'See the Code',
      link: 'https://github.com/PostsDesert/SimpleC',
      svgSrc: '/GithubVector.svg',
      svgAlt: 'Octopuss - Github Mascot',
      textColor: 'white',
      buttonColor: 'black',
    }
  },
  // ...
];

interface button {
  text: string,
  link: string,
  svgSrc: string,
  svgAlt: string,
  textColor: string,
  buttonColor: string,
  className?: string,
}

const Projects = () => {
  return (
    <div id='projects' className={Styles.projects} style={{ width: '100%' }}>
      <div className={Styles.titleContainer}>
        <SectionHeader title='projects' />
        <div className={Styles.seeMoreGithub}>
          <a href={links.github} target="_blank" className={Styles.seeMoreGithubText}>See more on Github</a>
          <img src="/GithubVectorBlack.svg" className={Styles.githubIcon} />
        </div>
      </div>
      {projects.map((project, index) => (
        <Project key={index} {...project} index={index} />
      ))}
    </div>
  );
};

export default Projects;
