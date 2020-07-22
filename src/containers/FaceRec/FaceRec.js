import React from 'react';

const FaceRec=({imageURL})=>{
    return(
        <div>
            <div className='absolute mt2'>
            <img alt='' src={imageURL} width='500px' height='auto'/>
            </div>
        </div>
    );

}
export default FaceRec;
