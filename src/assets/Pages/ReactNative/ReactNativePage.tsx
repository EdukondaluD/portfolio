import { Animator, ScrollPage, batch, Fade, MoveOut, Sticky } from "react-scroll-motion";
import userIcon from "../../images/react.svg";
import './ReactNativePage.scss';

const ReactNativePage = () => {
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
            <h1>React Native Developer</h1>
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

export default ReactNativePage