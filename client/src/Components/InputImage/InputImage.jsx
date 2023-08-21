import React from "react";
import './inputImage.css'
import '../../base.css'

const InputImage = ({ onChange, value }) => {
    return (
        <div className="input-image-container width-100 padding-m flex justify-center">
            <input className="input-file width-100 padding-m" type="file" id="input-file-label"/>
            <label className="input-file-label width-100 padding-m" htmlFor="input-file-label" value={value} onChange={onChange}>Click to upload image</label>
        </div>
        
    );
}
 
export default InputImage;