import { Animator, ScrollPage, batch, Fade, MoveOut, Sticky } from "react-scroll-motion";
import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <ScrollPage>
      <Animator className="scrollsubContainer" animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
        <h1>Contact Page</h1>
      </Animator>
    </ScrollPage>
  )
}

export default ContactPage