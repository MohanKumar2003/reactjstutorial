import { useState } from "react";

// like container
function MainApp() {
    return (
        <>
            <OnClickEvent /><hr />
            <OnChangeEvent /><hr />
            <OnSubmitEvent />
        </>
    )
}

export default MainApp;

// onClick Event hander
export function OnClickEvent() {
    return (
      <>
        <center>
          <button onClick={() => alert("Hello")}> Click Me</button>
        </center>
      </>
    );
}

// onChange Event Handler
export function OnChangeEvent() {
    const [name, setName] = useState("");
    return (
        <>
            Name : {name}<br />
            <input type="text" name="name" onChange={(e)=>setName(e.target.value)} />
        </>
    )
}

// onSubmit Event Handler
export function OnSubmitEvent() {

    const [data, setData] = useState({
        email : "",
        password : ""
    })

    const changeHandler = e => {
        setData({...data, [e.target.name] : e.target.value})
    }

    const submitHandler = e => {
        e.prenentDefault();
        console.log(data);
    }
    return (
        <>
            <center>
                <form onSubmit={submitHandler}>
                    
                    <label>E-Mail</label><br />
                    <input type="text" name="email" onChange={changeHandler} /><br />

                    <label>Passowrd</label><br />
                    <input type="text" name="password" onChange={changeHandler} /><br />

                    <input type="submit" value= "login" />
                </form>
            </center>
        </>
    )
}