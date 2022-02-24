import React from 'react';
import {Nav} from 'react-bootstrap';
import styles from './styles.module.css'
import $ from 'jquery';
/*
import githubImg from '../images/github.png';
import linkedinImg from '../images/linkedin.png';
import stackoverflowImg from '../images/stackoverflow.png';
import twitterImg from '../images/twitter.png';
import gdevImg from '../images/gdev.png';
import codepenImg from '../images/codepen.png';
import hashnodeImg from '../images/hashnode.png';
import devBlackImg from '../images/dev-black.png';
*/


export const TopNav = (props) => {
    $(function () {
        // read the input JSON content
        if (props.links !== undefined) {
          console.log('props.links.items.length: ' + props.links.items.length)
          $('#navbarLinksDev').empty()
          for (let i = 0; i < props.links.items.length; i++) {
            const newDiv = $('<a href="' + props.links.items[i].href + '" target="_blank" rel="noopener noreferrer"><img src=' + props.links.items[i].src + ' class=' + styles.icon + ' alt="' + props.links.items[i].alt + '" /></a>&nbsp;')
            $('#navbarLinksDev').append(newDiv)
          }
        }
    })

    return (
        <Nav className="navbar navbar-expand-lg navbar-light bg-light header">
            <div className="container-fluid">
                <a className="navbar-brand" href="#main">{ props.navTitle }</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                      { props.children }
                    </ul>
                    <div id="navbarLinksDev"></div>
                </div>
            </div>
        </Nav>
    );
}


export const TopNavItem = (props) => {
/*
  state = {
    isActive: "" //this.props.active
  };

  constructor(props) {
    super(props);
    this.clickFunction = this.clickFunction.bind(this);
  }

  clickFunction = (e) => {
    $('.navbar-nav .nav-link').removeClass('active');
    this.setState({ isActive: "active" });
//        console.log('1: ');
  //      console.log(this.state.isActive);
    //    this.setState({ isActive: true });
      //  console.log('2: ');
        //console.log(this.state.isActive);
    //            <a className={`nav-link ${isActive ? "active" : ""}`}  href={this.props.href} onClick={this.clickFunction}>{this.props.children} | {this.className} |</a>

    this.forceUpdate();
    //$('#navbarSupportedContent').hide();
  }

  render() {
    const isActive = this.state.isActive;
    */
    //console.log("isActive: " + isActive);

    return (
        <li className="nav-item">
          <a className={`nav-link`}  href={props.href}>{props.children}</a>
        </li>
    );
}
