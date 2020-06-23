import React, {useState} from 'react';

function DropDownList(props) {
    if(!props.show) return null;
    return (
        <div class="List">
            {/* <ul style={{listStyleType: "none"}}> */}
            {props.items.map((i) => (<ListItem key={i} value={i}/>))}
            {/* </ul> */}
        </div>
    );
}

function ListItem(props) {
    const ref = React.createRef();
    const [color, setColor] = useState("white");
    const onMouseOver = () => {
        setColor("gray");
    };
    const onMouseOut = () => {
        setColor("white");
    }
    return (
        <li ref={ref} style={{ display: "block", borderBottom: "1px solid gray", backgroundColor: color, padding: "2px 4px 2px 4px" }} onMouseOver={() => onMouseOver()} onMouseOut={() => onMouseOut()}>{props.value}</li>
    );
}

export default DropDownList;