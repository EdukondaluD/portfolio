import React from 'react';
import {Animator,ScrollContainer,ScrollPage,batch,Fade,FadeIn,FadeOut,Move,MoveIn,MoveOut,Sticky,StickyIn,StickyOut,Zoom,ZoomIn,ZoomOut} from "react-scroll-motion";
import "./IntroductionPage.scss";
import userIcon from "../../images/Developer.webp";

const IntroductionPage = () => {
  return (
    <ScrollPage>
       <Animator className="scrollsubContainer" animation={batch(Sticky(), Fade(), MoveOut(0, -300))}>
        <div className='mainContainer'>
          <div className='rowOneContainer'>
              <img src={userIcon} alt="icon" loading='lazy' />
          </div>
          <div className='rowTwoContainer'>
            <h1>Hello</h1>
            <p>I'm Front-end Developer...!</p>
            <div>
              <div className='buttonContainer'>
                <p>Resume</p>
              </div>
              <div className='buttonContainer'>
                <p>Projects</p>
              </div>
              <div className='buttonContainer'>
                <p>Contact</p>
              </div>
            </div>
          </div>
        </div>
        </Animator>
    </ScrollPage>
  )
}

export default IntroductionPage