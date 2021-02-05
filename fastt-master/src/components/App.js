import React from "react";
import {Button} from "./button";
import "./Button.css"
import {keySets} from "./qwert";


export const App = () => {
    console.log(keySets.en)
    return (
        <div className="app">
            <div className="keyboard-row">
                {keySets.en[0].map((item) => <Button value={item.glyph} upperValue={item.upperGlyph} colorValue={item.color} sizeValue={item.size} code={item.code}/>)}</div>
                <div className="keyboard-row">
                {keySets.en[1].map((item) => <Button value={item.glyph} upperValue={item.upperGlyph} colorValue={item.color} sizeValue={item.size} code={item.code}/>)}</div>
                <div className="keyboard-row">
                {keySets.en[2].map((item) => <Button value={item.glyph} upperValue={item.upperGlyph} colorValue={item.color} sizeValue={item.size} code={item.code}/>)}</div>
                <div className="keyboard-row">
                {keySets.en[3].map((item) => <Button value={item.glyph} upperValue={item.upperGlyph} colorValue={item.color} sizeValue={item.size} code={item.code}/>)}</div>
                <div className="keyboard-row">
                {keySets.en[4].map((item) => <Button value={item.glyph} upperValue={item.upperGlyph} colorValue={item.color} sizeValue={item.size} code={item.code}/>)}

            </div>


        </div>
    )
}
