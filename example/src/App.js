import React from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import { TopNav, TopNavItem } from 'reactjs-topnav-component'
import 'reactjs-topnav-component/dist/index.css'


const linksData = {
  items: [
    {
      alt:  'GitHub',
      src:  './images/github.png',
      href: 'https://github.com/adafycheng'
    },
    {
      alt:  'LinkedIn',
      src:  './images/linkedin.png',
      href: 'https://linkedin.com/in/adafycheng'
    },
    {
      alt:  'stackoverflow',
      src:  './images/stackoverflow.png',
      href: 'https://stackoverflow.com/story/adafycheng'
    },
    {
      alt:  'Twitter',
      src:  './images/twitter.png',
      href: 'https://twitter.com/adafycheng'
    },
    {
      alt:  'Google Developer',
      src:  './images/gdev.png',
      href: 'https://g.dev/adafycheng'
    },
    {
      alt:  'CodePen',
      src:  './images/codepen.png',
      href: 'https://codepen.io/adafycheng'
    },
    {
      alt:  'HashNode',
      src:  './images/hashnode.png',
      href: 'https://adafycheng.hashnode.dev'
    },
    {
      alt:  'dev.to',
      src:  './images/dev-black.png',
      href: 'https://dev.to/adafycheng'
    }
  ]
}

const App = () => {
  return (
    <TopNav navTitle="My Portfolio" links={linksData}>
      <TopNavItem href="#main">Home</TopNavItem>
      <TopNavItem href="#about">About</TopNavItem>
      <TopNavItem href="#portfolio">Portfolio</TopNavItem>
      <TopNavItem href="#contact">Contact</TopNavItem>
    </TopNav>
  );
}

export default App
