import React from 'react'
import { Nav } from 'react-bootstrap'
import $ from 'jquery'
import styles from './styles.module.css'

export const TopNav = (props) => {
  $(function () {
    // read the input JSON content
    if (props.links !== undefined) {
      console.log('props.links.items.length: ' + props.links.items.length)
      $('#navbarLinksDev').empty()
      for (let i = 0; i < props.links.items.length; i++) {
        const newDiv = $(
          '<a href="' +
            props.links.items[i].href +
            '" target="_blank" rel="noopener noreferrer"><img src=' +
            props.links.items[i].src +
            ' class=' +
            styles.icon +
            ' alt="' +
            props.links.items[i].alt +
            '" /></a>'
        )

        $('#navbarLinksDev').append(newDiv).append('&nbsp;')
      }
    }
  })

  const navbarClassName =
    'navbar navbar-expand-lg navbar-light bg-light ' + styles.header

  return (
    <Nav className={navbarClassName}>
      <div className='container-fluid'>
        <a className={styles.navbarBrand} href='#main'>
          {props.navTitle}
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>{props.children}</ul>
          <div id='navbarLinksDev' />
        </div>
      </div>
    </Nav>
  )
}

export const TopNavItem = (props) => {
  return (
    <li className='nav-item'>
      <a className={styles.navLink} href={props.href}>
        {props.children}
      </a>
    </li>
  )
}
