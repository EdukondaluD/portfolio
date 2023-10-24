import "./App.scss";
import {ScrollContainer} from "react-scroll-motion";
import IntroductionPage from "./assets/Pages/Introduction_Page/IntroductionPage";
import ReactjsPage from "./assets/Pages/ReactjsPage/ReactjsPage";
import ReactNativePage from "./assets/Pages/ReactNative/ReactNativePage";
import NodejsPage from "./assets/Pages/NodeJsPage/NodejsPage";
import ContactPage from "./assets/Pages/ContactPage/ContactPage";
import ResumePage from "./assets/Pages/ResumePAge/ResumePage";

function App() {
  return (
    <ScrollContainer>
      <IntroductionPage />
      <ResumePage />
      <ReactjsPage />
      <ReactNativePage />
      <NodejsPage />
      <ContactPage />
    </ScrollContainer>
  );
}

export default App;
