/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import '../style/Box.css'

export default ({clas, data}) => {

    const showExpenses = () => {

        if (data) {
            return ( data.map ( 
                item => {
                    return (
                        <div className='justifySB flex '>
                            <p>{item.amount}</p>
                            <p>{item.discription}</p>
                            <p>{item.catagory}</p>
                        </div>
                    )
                }
            ))
            
        }
    } 

    return (
        <div className={` box ${clas}`} >

            <div className='justifySB flex center'>

                <h3>Amount</h3>
                <h3>Discription</h3>
                <h3>Category</h3>
            </div>
            
            {showExpenses()}

        </div>
    )
}