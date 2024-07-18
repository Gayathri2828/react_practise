 import React from "react";
 import { Card } from "./components/card/card.js";
 import { ImageComponents } from "./components/image/imageComponent.js";
 import { ListParentOrdered } from "./components/list/listParent.js";
 import "./index.css";
 import ButtonComponentClass from "./components/class-components/button.js";
import TodoComponent from "./components/class-components/todo/todo.js";
import ProductListing from "./components/class-components/prooductListing/productListing.js";
import Weather from "./components/weather/weather.js";

import Counter from "./components/task/count.js";


const App = () => {
const isLogin = true;
  return (
     <div>
        {/*<ButtonComponentClass/>*/}
        {/*<TodoComponent/>*/}
        
        {/*< Weather/>*/}
        {/*<Counter/>*/}
        <ProductListing/>
        
      </div>
    );
};

export default App;

