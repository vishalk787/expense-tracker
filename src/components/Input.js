import React from 'react'


export default ({type, placeholder, clas}) => {
    return (
        <div className={clas} >
            <input className='corner shadow' type={type} placeholder={placeholder} ></input>
        </div>
    )
}