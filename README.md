Tasks:

1. Repeat the class
2. Check the documentation of hero icons
3. Register form using uncontrolled components
4. Store the data in the local storage
5. Try the todo with uncontrolled

Topics:

1. State management in react
2. Forms in react
3. Uncontrolled components
4. creating forms using Tailwind css (https://www.devwares.com/blog/how-to-create-react-forms-using-tailwind-css/)

Forms :

There are 2 ways to handle the forms in the react applications

1. uncontrolled components

In uncontrolled components , input state changes will be controlled by the DOM
Field validations were not possible in uncontrolled components , overall form validations will be possible
Maintanence will be difficult

2. controlled components

In controlled components , input state changes will be controlled by the React itself  
Field validations were possible
Maintanence will be easy

Forms important terms :

1. state management of the inputs
2. validations
3. submissions (Https request)

4. uncontrolled components :

useRef : useRef is hook in functional components which can directly access the dom through the reference
useRef hook persists the values between renders
useRef hook doesn't cause re-renders

syntax : useRef accepts the initial value(optional), and returns the variable which we can use for attaching for the node reference

const ref = useRef()

steps to create uncontrolled components :

1. Implement the form which contains JSX
2. Create the references for the inputs using useRef hook provided by the react
3. Attach the references for the inputs using ref attributes given to the inputs
4. on submit collect the user input using ref.current.value

State managment : Managing the data with in the application

State management is of 2 ways :

1. Local state management

using useState alone only local state management is possible

2. Global state management :

Global state management refers to managing data through out the applications irrespective of the size of the application

metaphor : ex: Books library