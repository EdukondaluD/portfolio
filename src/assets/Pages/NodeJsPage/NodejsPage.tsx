import React from 'react';
import { Animator, ScrollPage, batch, Fade, MoveOut, Sticky } from "react-scroll-motion";
import "./NodejsPage.scss";
import userIcon from "../../images/nodejs.png";

const NodejsPage = () => {
  return (
    <ScrollPage>
      <Animator className="scrollsubContainer" animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
        <div className="containerDiv">
          <div className="rowOneContainer">
            <img src={userIcon} alt="icon" loading="lazy" />
            <h1>Technologies to be used</h1>
            <div>
                <p>React js</p>
                <p>Java Script</p>
                <p>Scss</p>
                <p>Redux</p>
            </div>
          </div>
          <div className="rowTwoContainer">
            <h1>Node Js Developer</h1>
            <p>I'm Front-end Developer...!</p>
            <div>
              <div className="buttonContainer">
                <p>Resume</p>
              </div>
              <div className="buttonContainer">
                <p>Projects</p>
              </div>
              <div className="buttonContainer">
                <p>Contact</p>
              </div>
            </div>
          </div>
        </div>
      </Animator>
    </ScrollPage>
  )
}

export default NodejsPage