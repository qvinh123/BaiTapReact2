import React, { Component } from "react";
import "./styles.css";

export default class Header extends Component {
  render() {
    return <div className="header">
        <h1 className="text-center">Try Glasses App Online</h1>
        <img src="./img/background.jpg" alt="background"/>
        <div className="overlay"></div>
    </div>;
  }
}
