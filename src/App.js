

import ButtonComponent from "./components/button/button.js";
import { Heading1,Heading2,Heading3,Heading4,Heading5,Heading6 } from "./components/heading/headings.js";
import { ListParentOrdered,ListParentUnordered } from "./components/list/listParent.js";
import { ImageComponents } from "./components/image/imageComponent.js";
import { Card } from "./card/card.js";

const App = () => {
  // const greeting="Good morning ram";
  // const course="fullstack";
  return (
  <div>
    <ButtonComponent></ButtonComponent>
    <Heading1></Heading1>
    <Heading2></Heading2>
    <Heading3></Heading3>
    <Heading4></Heading4>
    <Heading5></Heading5>
    <Heading6></Heading6>
    <ListParentOrdered/>
    <ListParentUnordered/>
    <ImageComponents></ImageComponents>
    <Card></Card>

    {/* <h3>hai 3:11pm code commit</h3>
    <h3>{greeting}</h3>
    <h3>{course}</h3>
    {
      [1,2].map((num,index) => (
      <Card key={index}></Card>))
    }

    {false ?<Card></Card> : <h3>hai</h3>} */}
</div>
    );
  };
export default App;
