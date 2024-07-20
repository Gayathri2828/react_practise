import React, { Component } from 'react'

export default class MountingPhase extends Component {

    constructor(){
        console.log("constructor executing...")
        super();
        this.state={
            count: 10,
            favoritecolor: "green",
        }
    }
    componentDidMount(){
        console.log("componentDidMount executong...");
        document.title=`React count ${this.state.count}`
    }
    static getDerivedStateFromProps(props, state){
     return{favoritecolor: props.favColor};
    } 
     
    increseCount=()=>{
         this.setState({
            count: this.state.count + 1,
         });
    };

    componentDidUpdate(){
        document.title=`React count ${this.state.count}`
    }

    shouldComponentUpdate(){
        return true;
    }

    getSnapshotBeforeUpdate(state,prop){
        console.log(state,prop) 
        return null;
    }

  render() {
    return (
      <div>
        <h3>My favourite color {this.state.favoritecolor}{this.state.count}</h3>
        <button onClick={this.increseCount}>Click to increse the count</button>
      </div>
    )
  }
}
