import React from "react";
import { Component } from "react";
import  { Card }  from "react-bootstrap";



class ButtonComponentClass extends Component{
    state={
        text1:"subscribe",
        text2:"subscribed",
        isSubscribe:true,
    };

    SubscribeHandler=()=>{
        console.log("button clicked");
        this.setState({
            isSubscribe: !this.state.isSubscribe,
        });
        
        console.log()
    };


    render() {
        return (
            <React.Fragment>
        <button onClick={this.SubscribeHandler}>
        {this.state.isSubscribe ? this.state.text2 : this.state.text1}
        </button>

        {this.state.isSubscribe ? (
            <>
               <h2>Thanks for subscribring, enjoy the permium content</h2>
               <Card />
            </>
            
            ):(
            <h2>Please subscribe to access the perimium content</h2>
            )
        }
            </React.Fragment>
        );
        
    }
}
export default ButtonComponentClass;
