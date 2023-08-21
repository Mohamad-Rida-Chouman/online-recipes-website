import React from "react";
import './input.css'
import '../../base.css'

const Input = ({ onChange, children, value }) => {
    return (
        <input className="input width-100 padding-m" type="text" value={value} onChange={onChange} placeholder={children} />
    );
}
 
export default Input;