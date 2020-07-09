import React from 'react';
// import logo from './logo.svg';
import avtar from "./resources/avatar3by2.jpg";
import './App.css';
import FlexContainer from "./Components/FlexContainer";
import Aside from "./Components/Aside";
import Details from "./Components/Details";

// const list = { items: ["item1", "item2"] };

// const stopDefaults = (e) => {
//   e.preventDefault();
//   e.stopPropogation();
// }

// export function AppBar(props) {
//   const avtarIcon = <img style={{ display: "inline" }} src={logo} alt="avtar" height="40vmin" width="40vmin" />
//   const [clicked, setClicked] = useState(false);
//   return (
//     <div id="app-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <div style={{ flexGrow: 1 }}></div>
//       <Avatar user="Sameer" icon={avtarIcon} />

//     </div>
//   );
// }

// function Avatar(props) {
//   return (
//     <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
//       <span>Welcome, {props.user}</span>
//       {props.icon}
//     </div>
//   );
// }

function App() {
  return (
    <div className="App margin-8">
      <FlexContainer direction="row">
        <Aside imagePath={avtar} name="Sameer Tale"/>
        <Details />
      </FlexContainer>
    </div>
  );
}

export default App;
