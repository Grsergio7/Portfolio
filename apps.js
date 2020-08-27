/*
import Highway from '@dogstudio/highway';
import Fade from './transition';

const H = new Highway.Core({
    transitions: {
        default: Fade
    }
});
*/

const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo');
const navs = document.querySelector('.navs');
const headline = document.querySelector('.headline');
const headline2 = document.querySelector('.headline-2');
const headline3 = document.querySelector('.headline-3');

const tl = new TimelineMax();

tl.fromTo( hero, .5, { width: '20%'}, { width: '100%', ease: Power2.easeInOut })
.fromTo(hero, 1.1, { height: "10%" }, { height: "100%", ease: Power2.easeInOut })
.fromTo(slider, 1.1, { x: '-100%' }, { x: '0%', ease: Power2.easeInOut }, "-=1.2")
.fromTo(headline, 1.5, { opacity: 0, x: '-50%' }, { opacity: 1, x: '0%', ease: Power2.easeInOut }, "-=1")
.fromTo(headline2, 1.7, { opacity: 0, x: '+50%' }, { opacity: 1, x: '0%', ease: Power2.easeInOut }, "-=1")
.fromTo(headline3, 2, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut }, "-=1")
.fromTo(logo, .5, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut }, "-=1")
.fromTo(navs, .5, { opacity: 0 }, { opacity: 1, ease: Power2.easeInOut }, "-=1")
;


    