import { ImageComponents } from "./components/image/imageComponent";
import {Card} from "./components/card/card"
import { ListParentOrdered } from "./components/list/listParent";
import ButtonComponent from "./components/button/button";
import "./index.css";



// if/else statement :---

// const App = () => {
//   const isLogin=true;
//   if(isLogin){
//   return(
//     <>
//       <h3>wellcome user good afternoon</h3>
//       <ImageComponents/>
//       <Card/>
      

//     </>
//   );
// } else {
//   return(
//     <>
//     <h3>pleasr login to access the app</h3>
//     </>
//   );
// }
// };
// export default App;



// ternary operator:--

// const App = () => {
//   const islogin = true;
//   return(
//      <div>
//         {islogin ? (
//           <>
//           <h3>wellcome user good afternoon</h3>
//           <ImageComponents/>
//           <Card/>
//            </>
//         ) : (
//           <h3>please login to access the app</h3>
//         )}
//      </div>
//   )
// };
// export default App;


// logical AND operator:---

const App = () => {
  const isLogin = true;
  return (
    <div>
      {
        isLogin && 
        <>


            <h3>wellcome user good afternoon</h3>
            {/* <ListParentOrdered/> */}
            {/* <ImageComponents/>
            <Card/> */}
            <ButtonComponent/>
            {/* <button 
    // onClick={() => {}} 
    // className="buttonText"
    // // style={{ color: "red", backgroundColor: "green" }}
    // // style={buttonStyle}
    // > 
    //     Click me
    // </button> */}

  
            
        </>
      }
    </div>
  )
}

export default App










