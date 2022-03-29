import React, { Component } from "react";
import styles from "./App.css";
class App extends Component {
  handleCallFamilyToEat() {
    alert("Hey fam! Food's ready!");
  }

  handlediv() {
    alert("Hey! You Clicked the Element DIV 1 ");
  }

  handlespan() {
    alert("Hey! You Clicked the Element SPAN 1 ");
  }

  handlebutton() {
    alert("Hey! You Clicked the Element BUTTON 1 ");
  }
  handlelink() {
    alert("Hey! You Clicked the Element LINK 1 ");
  }

  handleD() {
    alert("Hey! You Clicked the Element DIV 2 ");
  }

  handleS() {
    alert("Hey! You Clicked the Element SPAN 2 ");
  }

  handleB() {
    alert("Hey! You Clicked the Element BUTTON 2 ");
  }
  handleL() {
    alert("Hey! You Clicked the Element LINK 2 ");
  }

  render() {
    return (
      <>
        <div className="parent">
          <p className="child" onClick={this.handlediv}>
            I am DIV
          </p>
          <p className="child" onClick={this.handlespan}>
            I am SPAN
          </p>
          <p className="child" onClick={this.handlebutton}>
            I am BUTTON
          </p>
          <a href=" " className="im-a-child" onClick={this.handlelink}>
            I am LINK{" "}
          </a>
        </div>
        <br></br>

        <div className="parent">
          <button className="div2" onClick={this.handleD}>
            I am DIV
          </button>
          <br></br>
          <button className="span2" onClick={this.handleS}>
            I am SPAN
          </button>
          <br></br>
          <button className="button2" onClick={this.handleB}>
            I am BUTTON
          </button>
          <br></br>
          <button className="link2" onClick={this.handleL}>
            <a href=" ">I am LINK</a>
          </button>
          <br></br>
        </div>
      </>
    );
  }
}

export default App;
