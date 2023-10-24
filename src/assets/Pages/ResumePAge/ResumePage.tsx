import React from 'react';
import { Animator, ScrollPage, batch, Fade, MoveOut, Sticky } from "react-scroll-motion";



const ResumePage = () => {
  return (
    <ScrollPage>
      <Animator className="scrollsubContainer" animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
        <h1>Resume Page</h1>
      </Animator>
    </ScrollPage>
  )
}

export default ResumePage