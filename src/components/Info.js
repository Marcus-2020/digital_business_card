import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import PersonalPhoto from '../assets/images/personal-photo.png';

const linkedinUrl = "https://www.linkedin.com/in/marcus-vinicius-menezes-dos-santos/";
const mailTo = "mailto: marcus.santos1808@hotmail.com";

export default function Info() {
    return (
        <div>
            <img className={"b-card-photo"} src={PersonalPhoto} alt={"personal-photo"} />
            <div className={"b-card-info"}>
                <span className={"b-card-name"}>Marcus Santos</span>
                <span className={"b-card-job"}>.NET Developer</span>
                <span className={"b-card-website"}>No website</span>

                <div className={"b-card-buttons"}>
                    <a href={mailTo} target={"_blank"}
                       className={"b-card-button email"}>
                        <div className={"flex justify-center align-items-center gap-1"}><HiMail />Email</div>
                    </a>
                    <a href={linkedinUrl} target={"_blank"}
                       className={"b-card-button linkedin"}>
                        <div className={"flex justify-center align-items-center gap-1"}><FaLinkedin />LinkedIn</div>
                    </a>
                </div>
            </div>
        </div>
    );
}
