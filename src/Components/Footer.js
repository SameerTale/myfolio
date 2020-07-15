import React from 'react';

export function Footer(props) {
    return (
        <footer className="teal center " style={{ display: "block", width: "auto", marginTop: "8px", padding: "5px" }}>
            <p>Find me on social media.</p>
            <SocialLink iconClass="fa-facebook-official" link="https://www.facebook.com/sameer.tale"/>
            <i className="fa fa-instagram hover-opacity margin-horz"></i>
            <i className="fa fa-linkedin hover-opacity margin-horz"></i>
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