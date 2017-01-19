import React, {Component} from "react";
import "./style.css";

let items = ["Home", "Projects", "About", "Resume"];

class NavBar extends Component {
  render() {
    return (
      <nav className="container">
        {items.map(item => <a key={item}>{item}</a>)}
      </nav>
    );
  }
}

export default NavBar;
