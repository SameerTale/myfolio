import React, { Fragment, useState } from 'react';
import { MenuIcon } from './Icons/SVGIcons';
import Button from './Controls/Button';
import DropDownList from './Controls/DropdownList';
import TextArea from './Controls/TextArea'
import logo from './logo.svg';
import './App.css';

const list = {items: ["item1", "item2"]};

const stopDefaults = (e) => {
  e.preventDefault();
  e.stopPropogation();
}

export function AppBar(props) {
  const avtarIcon = <img style={{display: "inline"}} src={logo} alt="avtar" height="40vmin" width="40vmin"/>
  const [clicked, setClicked] = useState(false);
  return (
    <div id="app-header">
      <Button handleClick={(e) => {setClicked(!clicked);}}><MenuIcon style={{ color: "white" }} /><DropDownList items={list.items} show={clicked} /></Button>
      <img src={logo} className="App-logo" alt="logo" />
      <div style={{ flexGrow: 1 }}></div>
      <Avatar user="Sameer" icon={avtarIcon}/>
      
    </div>
  );
}

function Avatar(props) {
  return (
    <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
      <span>Welcome, {props.user}</span>
      {props.icon}
    </div>
  );
}

function App() {
  return (
    <Fragment>
      <AppBar user="Sameer"/>
      <div className="App">
        <header className="App-header">

          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    </Fragment>
  );
}

export default App;
