import React from 'react';
import TwitterIcon from '../assets/images/twitter-icon.png';
import FacebookIcon from '../assets/images/facebook-icon.png';
import InstagramIcon from '../assets/images/instagram-icon.png';
import GitHubIcon from '../assets/images/github-icon.png';

const twitterUrl = "https://twitter.com/MarcusV92493841";
const facebookUrl = "https://www.facebook.com/marcus.menezesdossantos";
const instagramUrl = "https://www.instagram.com/marcus_santosms/";
const githubUrl = "https://github.com/Marcus-2020";

export default function Footer() {
    return (
        <div className={"b-card-footer"}>
            <a href={twitterUrl} target={"_blank"}><img src={TwitterIcon} alt={"twitter-icon"} /></a>
            <a href={facebookUrl} target={"_blank"}><img src={FacebookIcon} alt={"facebook-icon"} /></a>
            <a href={instagramUrl} target={"_blank"}><img src={InstagramIcon} alt={"instagram-icon"} /></a>
            <a href={githubUrl} target={"_blank"}><img src={GitHubIcon} alt={"github-icon"} /></a>
        </div>
    );
}
