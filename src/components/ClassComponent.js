
import React, {Component} from "react";

class ClassComponent extends React.Component {

    // state
    state = {
        intro : "State and props in Class Component"
    }

    render() {
        let name = "Class Based Component";
        return (
            <>
                <center>
                    <h1>Welcome to {name}</h1>
                    <h1>Welcome to {this.state.intro}</h1><hr/>
                    <Test intro = {this.state.intro}/>
                </center>
            </>
        )
    }
}


export default ClassComponent;

// these one more componemt
class Test extends React.Component {
    render() {
        return(
            <>
                <center>
                    <h2>Intro : {this.props.intro}</h2>
                </center>
            </>
        )
    }
}