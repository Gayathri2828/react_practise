import React from "react";
// import { Card } from "./components/card/card.js";
import { ImageComponents } from "./components/image/imageComponent.js";
// import { ListParentOrdered } from "./components/list/listParent.js";
// import "./index.css";
// import ButtonComponent from "./components/button/button.js";
// import FirstComponent from "./components/bootstrap/firstcomponent.js"
// import CustomAccordion from "./components/accordion/accordion.js";
// import CustomProgressBar from "./components/progress-bar/progress-bar.js";
// // import ButtonComponent from "./components/button/button.js";
// import { fakeData } from "./components/javascript/data.js"; 
import { Heading1 } from "./components/heading/headings.js";
import CustomList from "./components/list/CustomList.js";
import { recipeData } from "./components/javascript/recipeData.js";




const App = () => {
//   const isLogin = true;
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
      {/* <ButtonComponent 
      text="Login"
      bgColor="red" 
      width={100} 
      height={100} 
      onPress={()=>{}}
       />
       <ButtonComponent 
      text="signUp"
      bgColor="green" 
      width={100} 
      height={50} 
      onPress={()=>{}}
       /> */}

        {/* {fakeData.map((eachProduct) => {
           return (
      <>
             <Heading1 title={eachProduct.title}/>
             <Heading3 title={eachProduct.description}/>
             <ImageComponents
             src={eachProduct.image}
             width={100}
             height={100}
             alt={eachProduct.title} 
             >
               </ImageComponents> 
              <ButtonComponent 
                 text={`$ ${eachProduct.price}`}
                 bgColor="green" 
                 width={100} 
                 height={40} 
                 onPress={()=>{}}
                 />   

                 <Heading6>
                 <Heading1 title={eachProduct.title}/>
                  </Heading6>        
       </>
        );
        })}; */}

          {/* <CustomList list={["apple", "banana", "orange"]}/>
       <CustomList list={["csk", "rcb", "srh"]}/>
       <CustomList list={["car", "bike", "ship"]}/>

       
      <Heading1 title={["ingredients to make pizza"]}/>
    <CustomList list={[
         "Pizza dough",
      "Tomato sauce",
      "Fresh mozzarella cheese",
      "Fresh basil leaves",
      "Olive oil",
      "Salt and pepper to taste",
      ]}/>
      
      
      <Heading1 title={["instructions to make pizza"]}/>
      <CustomList list={[
          "Preheat the oven to 475°F (245°C).",
          "Roll out the pizza dough and spread tomato sauce evenly.",
          "Top with slices of fresh mozzarella and fresh basil leaves.",
          "Drizzle with olive oil and season with salt and pepper.",
          "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
          "Slice and serve hot.",
      ]} */}

        {
         recipeData.map((eachRecpie,index)=>{
            const{ id, name:dishName, image,ingredients,instructions }=eachRecpie;
            
            return(
               <React.Fragment key={id}>
               <Heading1 title={`${id} ${dishName}`}/>
               <ImageComponents src={image} width={100} height={100} alt={dishName}/>
               <Heading1 title={"ingredients to prepare"}/>
               
               <CustomList list={ingredients}/>
               <Heading1 title={"instructions to prepare"}/>
            
               <CustomList list={instructions}/>
               </React.Fragment>
            )
         })
        }

      
       
   </div>
    );
};

export default App;

