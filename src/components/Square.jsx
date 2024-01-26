/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import React from "react";
import '../App.css'

export default function Square () {
    const [value,setValue] = useState(null)
    
    //defining a function
    const handleClick = () => {
       setValue('x')
    }

   

    return(
        <div className="board-row">
            <button onClick={handleClick}>{value}</button>

        </div>
    )
}