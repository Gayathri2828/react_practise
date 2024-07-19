 import React from "react";
 import { Card } from "./components/card/card.js";
 import { ImageComponents } from "./components/image/imageComponent.js";
 import { ListParentOrdered } from "./components/list/listParent.js";
 import "./index.css";
 import ButtonComponentClass from "./components/class-components/button.js";
import TodoComponent from "./components/class-components/todo/todo.js";
import ProductListing from "./components/class-components/productListing/productListing.js";
import Weather from "./components/weather/weather.js";

import Counter from "./components/task/count.js";
import MountingPhase from "./components/class-components/mounting/mounting.js";
import Unmounting from "./components/class-components/unmounting/unMounting.js";
import ParentComponent from "./components/class-components/purecomponent/parent.js";
import CircleComponent from "./components/class-components/circleTask/circles.js";


const App = () => {
const isLogin = true;
  return (
     <div>
       {/*<MountingPhase favColor={"red"}/>*/}
       {/*<Unmounting/>*/}
       {/*<ParentComponent/>*/}
       <CircleComponent/>
       
        
      </div>
    );
};

export default App;

