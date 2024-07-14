import React from "react";
import { Card } from "./components/card/card.js";
import { ImageComponents } from "./components/image/imageComponent.js";
import { ListParentOrdered } from "./components/list/listParent.js";
import "./index.css";
import ButtonComponent from "./components/button/button.js";
import FirstComponent from "./components/bootstrap/firstcomponent.js"
import CustomAccordion from "./components/accordion/accordion.js";
import CustomProgressBar from "./components/progress-bar/progress-bar.js";
// import ButtonComponent from "./components/button/button.js";

const App = () => {
  const isLogin = true;
  // if (isLogin) {
  //   return (
  //     <>
  //       <h3>Wellcome user good afternoon</h3>
  //       <ImageComponent />
  //       <Card />
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <h3>Please login to access the app</h3>
  //     </>
  //   );
  // }
  return (
    <div>
      <ImageComponents src="https://www.recordnet.com/gcdn/presto/2021/03/22/NRCD/9d9dd9e4-e84a-402e-ba8f-daa659e6e6c5-PhotoWord_003.JPG?width=660&height=425&fit=crop&format=pjpg&auto=webp"
      width="100" height="100" alt="photo"/>

      <ImageComponents src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
      width="100" height="100" alt="photo"/>
    </div>

    
  );
};

export default App;










