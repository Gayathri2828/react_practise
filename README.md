1. function
2. class -> 2013-2018

Babel : Babel is transpiler which transpiles JSX code to js code or browser understandable code

class component:

1. render method : render is the required method in class components to insert JSX in the dom

State and props:

State: state is an object which holds the information or data of a particular component
state can make dynamic websites
state is private to a component
state is mutable
To access the state in react class components, we need to use this keyword

there are 2 ways to create state in react class based components

1. object way of creation
2. construction way of creation

To change the state we must use setstate method.
whenever are using setstate method, component will re-render to show updated layout.
state changes are asynchronous.

wrong usage of a state
let a=20
a=30(we can reassign)

const a=12
a=20(we cant reassign)

using state concepts

ex: youtube button
data : subscribe,subscribed
intialState : subscribe
event : onClick
finalState : subscribed

Events :
to attach the method in class componet , i need to use this.methodName

onClick={this.methodNmae}

CRUD: create the data, read the data, update the data, delete the data.
