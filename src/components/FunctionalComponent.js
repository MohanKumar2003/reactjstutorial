
import React, { useState } from "react";

const FunctionalComponent = () => {

    const [data, setData] = useState({
        name : "Madhu Mohan",
        age : 22
    })
    let name = "Functional Component";
    return (
        <>
            <center>
                <h1>Welcome to {data.name + " : " + data.age}</h1>
                <Test name={data.name} age={data.age}/>
            </center>
        </>
    )
}

export default FunctionalComponent;

// these is ome more function component
const Test = (props) => {
    return (
        <>
            <center>
                <h1>Name : {props.name} and Age : {props.age}</h1>
            </center>
        </>
    )
}
