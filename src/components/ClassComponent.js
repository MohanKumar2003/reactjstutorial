
import React, {Component} from "react";

class ClassComponent extends React.Component {

    render() {
        let name = "Class Based Component";
        return (
            <>
                <center>
                    <h1>Welcome to {name}</h1>
                </center>
            </>
        )
    }
}

export default ClassComponent;