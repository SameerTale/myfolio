import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const styles = {
    button: {
        cursor: "pointer",
        padding: "0px 11px 0px 12px",
        display: "inline-flex",
        border: "1px solid gray",
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#282c34",
        '&:hover': {
            backgroundColor: "#379683",
        },
        '&[aria-selected="true"]': {
            backgroundColor: "#379683",
            color: "#1976d2",
            borderColor: "#00bcd4",
            borderRadius: "inherit",
        },
    },
}

const Button = function Button(props) {
    const ref = React.createRef();
    // const [color, setColor] = useState("slategray");
    // const [opacity, setOpacity] = useState("1.0");
    const onMouseOver = () => {
        //setColor("#282c34");
        ref.current.style.backgroundColor = "#282c34";
        ref.current.style.opacity = "0.7";
    };
    const onMouseOut = () => {
        //setColor("slategray");
        ref.current.style.backgroundColor = "slategray";
        ref.current.style.opacity = "1.0";
    }
    useEffect(() => {
        ref.current.style.backgroundColor = "slategray";
        ref.current.style.opacity = "1.0";
    })
    return (
        <button ref={ref} class="Button" onClick={props.handleClick} onMouseOver={() => onMouseOver()} onMouseOut={() => onMouseOut()}>
            <span>
                {props.children}
            </span>
        </button>
    )
}

export default Button;