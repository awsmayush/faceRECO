import React from 'react';

const ImageLink=({onInputChnage, onButtonSubmit})=>{
    return(
        <div>
            <p>hello add link for detection</p>
            <div>
                <input type='text' onChange={onInputChnage} />
                <button className='grow pointer' onClick={onButtonSubmit}>Detect</button>
            </div>
        </div>
    );

}
export default ImageLink;
