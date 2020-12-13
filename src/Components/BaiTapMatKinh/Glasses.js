import React, { Component } from "react";
import "./styles.css";

let arrProduct = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./img/v1.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./img/v2.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./img/v3.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 4,
    price: 30,
    name: "DIOR D6005U",
    url: "./img/v4.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 5,
    price: 30,
    name: "PRADA P8750",
    url: "./img/v5.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 6,
    price: 30,
    name: "PRADA P9700",
    url: "./img/v6.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 7,
    price: 30,
    name: "FENDI F8750",
    url: "./img/v7.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 8,
    price: 30,
    name: "FENDI F8500",
    url: "./img/v8.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },

  {
    id: 9,
    price: 30,
    name: "FENDI F4300",
    url: "./img/v9.png",
    desc:
      "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];


export default class Glasses extends Component {
  //state
  state = {
    glasses: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/v1.png",
      desc:
        "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderGlasses = () => {
    return arrProduct.map((glasses, index) => {
      return (
        <div key={index}>
          <div className="glasses_item">
              <img alt={glasses.id} src={glasses.url} onClick={()=>{
                this.changeGlasses(glasses);
              }}   />
            </div>
        </div>
      );
    });
  };

  changeGlasses = (glassesClick) => {
    console.log(glassesClick);
    this.setState({
      glasses: glassesClick,
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className=" model">
              <img
                style={{ width: "200px" }}
                alt="123"
                src="./img/model.jpg"
              ></img>
              <img className="v1" src={this.state.glasses.url} alt="1" />
              <div className="content">
                <h3>{this.state.glasses.name}</h3>
                <p>{this.state.glasses.desc}</p>
              </div>
            </div>
          </div>
          <div className="col-6 model-2">
            <img
              style={{ width: "200px", margin: "0 auto", display: "block" }}
              alt="123"
              src="./img/model.jpg"
            />
          </div>
        </div>

        <div className="glasses mt-5">
          <div
            className="glasses_list d-flex flex-wrap"
            style={{
              padding: "20px 0 20px 15px",
              backgroundColor: "white",
            }}>
          {this.renderGlasses()}
          </div>
        </div>
      </div>
    );
  }
}
