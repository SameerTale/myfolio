import React, { useState, useEffect } from 'react';

function TextArea(props) {
    const [value, setValue] = useState("");
    const text = <span>this is a test <span style={{color: "Red"}}>text</span> for text area</span>;

    return (
        <form>
            <textarea value="sdfsf" readOnly></textarea>)
        </form>
    );
}

function HighlightedText() {

}

export default TextArea;