import { TopNav } from '.'
import React from 'react'

const linksData = {
  items: [
    {
      alt: 'GitHub',
      src: './images/github.png',
      href: 'https://github.com/adafycheng'
    },
    {
      alt: 'LinkedIn',
      src: './images/linkedin.png',
      href: 'https://linkedin.com/in/adafycheng'
    },
    {
      alt: 'stackoverflow',
      src: './images/stackoverflow.png',
      href: 'https://stackoverflow.com/story/adafycheng'
    },
    {
      alt: 'Twitter',
      src: './images/twitter.png',
      href: 'https://twitter.com/adafycheng'
    },
    {
      alt: 'Google Developer',
      src: './images/gdev.png',
      href: 'https://g.dev/adafycheng'
    },
    {
      alt: 'CodePen',
      src: './images/codepen.png',
      href: 'https://codepen.io/adafycheng'
    },
    {
      alt: 'HashNode',
      src: './images/hashnode.png',
      href: 'https://adafycheng.hashnode.dev'
    },
    {
      alt: 'dev.to',
      src: './images/dev-black.png',
      href: 'https://dev.to/adafycheng'
    }
  ]
}

describe('TopNav', () => {
  it('is truthy', () => {
    const nav = <TopNav navTitle='My Portfolio' links={linksData} />
    expect(nav).toBeTruthy()
  })
})
