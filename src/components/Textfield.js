import React from 'react'
import { useState } from 'react'
import './Textfield.css';

export default function Textfield(props) {

    const [text, setText] = useState("");
    const [copyBtn, setCopyBtn] = useState("Copy Text");

    // const [whiteMode, setDarkMode] = useState({
    //     backgroundColor: "rgba(225, 255, 255, .3)",
    //     backdropFilter: "blur(3px)",
    //     color: "#212529",
    //     transition: ".5s",
    //     boxShadow: "rgba(0, 0, 0, 0.35) 5px 5px 15px 3px"
    // })

    // const toggleDarkMode = () => {
    //     if (whiteMode.color === "black") {
    //     setDarkMode({
    //     backgroundColor: "rgba(0, 0, 0, .5)",
    //     color: "#eeecec",
    //     borderRadius: "2px solid white",
    //     transition: ".5s"
    //     })
    //     setBtnText("Toggle Light mode")

    // }
    // else {
    //     setDarkMode({
    //     backgroundColor: "rgba(225, 255, 255, .1)",
    //     backdropFilter: "blur(1px)",
    //     color: "black",
    //     transition: ".5s"
    //     })
    //     setBtnText("Toggle Dark mode")
    // }
    // }
    // const [btnText, setBtnText] = useState("Toggle Dark mode")

    // if(props.mode === "light"){
    // setDarkMode({
    //     backgroundColor: "rgba(0, 0, 0, .5)",
    //     color: "#eeecec",
    //     borderRadius: "2px solid white",
    //     transition: ".5s"
    //     })
    // }
    // else {
    //     setDarkMode({
    //       backgroundColor: "rgba(225, 255, 255, .1)",
    //       backdropFilter: "blur(1px)",
    //       color: "black",
    //       transition: ".5s"
    //     })}



    const convertToUpper = () => {
        setText(text.toUpperCase());
    }
    const convertToLower = () => {
        setText(text.toLowerCase());
    }
    const removeSpaces = () => {
        setText(text.replace(/\s+/g, " ").trim());
    }
    const copy = () => {
        navigator.clipboard.writeText(text)
        props.alert("Your text has been copied", "success")
        if (copyBtn === "Copy Text") {
            setCopyBtn("Copied!")
            setTimeout(() => {
                setCopyBtn("Copy Text")
            }, 5000);
        }
    }
    const clear = () => {
        setText("");
    }

    const onchange = (e) => {
        setText(e.target.value)
    }

    

    return (
        <>
            <div className="container my-5 txt-field" style={{color: props.txtfieldColor(), transition: ".5s"}}>
                <div className="mb-3" >
                    <label htmlFor="exampleFormControlTextarea1" className="form-label"><h5 className="default-text" style={{backgroundColor: props.txtareaColor()}}>{props.heading}</h5></label>
                    <textarea className="form-control txt-area" style={{ backgroundColor: props.txtareaColor(), backdropFilter: props.mode === "light" ? "blur(2px)" : "blur(2px)", color: props.txtfieldColor(), borderRadius: props.mode === "light" ? "2px solid white" : "none", transition: ".5s" }} placeholder="Enter text here" value={text} onChange={onchange} id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button className={`btn btn-${props.mode} mx-2 my-2`} disabled={text.length===0} onClick={convertToUpper}>Convert to upper case</button>
                <button className={`btn btn-${props.mode} mx-2 my-2`} disabled={text.length===0} onClick={convertToLower}>Convert to lower case</button>
                <button className={`btn btn-${props.mode} mx-2 my-2`} disabled={text.length===0} onClick={removeSpaces}>Remove extra spaces</button>
                <button className={`btn btn-${props.mode} mx-2 my-2`} disabled={text.length===0} onClick={clear}>Clear text field</button>
                <button className={`btn btn-${props.mode} mx-2 my-2`} disabled={text.length===0} onClick={copy }>{copyBtn}</button>
                <h2 className="default-text my-3" style={{backgroundColor: props.txtareaColor()}}>Your Passage summary</h2>
                <span className="default-text" style={{backgroundColor: props.txtareaColor()}}><b>Your passage contains {text.split(" ").filter((input)=>{return input.length!==0}).length} words and {text.length} characters</b></span>
            </div>
        </>
    )
}
