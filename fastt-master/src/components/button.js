import React from "react";
import "./Button.css"

export const Button = (props) => {

    const onClickButton = () =>{
        alert(props.code)
    }

    return(
        <div className="key">
           <span onClick={onClickButton}>{props.value}</span>

        </div>
    )
}
