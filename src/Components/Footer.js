import React from 'react';

export function Footer(props) {
    return (
        <footer className="teal center " style={{ display: "block", width: "auto", marginTop: "8px", padding: "5px" }}>
            <p>Find me on social media.</p>
            <SocialLink iconClass="fa-linkedin" link="https://www.linkedin.com/in/sameer-tale-a371972b"/>
            <SocialLink iconClass="fa-instagram" link="https://www.instagram.com/sameertale/?hl=en"/>
            <SocialLink iconClass="fa-facebook-official" link="https://www.facebook.com/sameer.tale"/>
            <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank" rel="noopener noreferrer">w3.css</a></p>
        </footer>
    );
}

function SocialLink(props) {
    return (
        <a href={props.link} target="_blank" rel="noopener noreferrer">
            <i className={`fa ${props.iconClass} hover-opacity margin-horz`}></i>
        </a>
    );
}