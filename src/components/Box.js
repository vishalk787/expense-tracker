/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import '../style/Box.css'

export default ({clas, data}) => {

    let total = 0

    const showExpenses = () => {
            return (
                data.map ( 
                    (item, index) => {
                        total += item.amount
                        return (
                            <div className='justifySB flex' key={index}>
                                <p>{item.amount}</p>
                                <p>{item.description}</p>
                                <p>{item.catagory}</p>
                            </div>
                        )
                    }
                )
            )
    } 

    return (
        <div className={` box ${clas}`} >
 
            <div className='justifySB flex center'>

                <h3>Amount</h3>
                <h3>Description</h3>
                <h3>Category</h3>
            </div>
            
            {showExpenses()}

            <div className='justifySB flex'>
                <h2> {total} </h2>
                <h2>Total</h2>
                {/* <h2></h2> */}
            </div>

        </div>
    )
}