import React from 'react'

import '../style/BarGraph.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default ({data}) => {

    let total = 0
    let categoryTotal = { Food: 0, Utility: 0, Transport: 0, Housing: 0, Personal: 0, Misc: 0 } 
    data.map( 
        item => {
            total += item.amount
            categoryTotal[item.catagory ] += item.amount
        } 
    )

    for (let key in categoryTotal) {
        let percentage = categoryTotal[key] / total * 100
        categoryTotal[key] = Math.floor((percentage / 100 * 530)*2.5)
    }
    console.log(total, categoryTotal)

    return (
        <div className='graph '>
            <div className='food bar'     style ={{height: categoryTotal.Food}} > Food</div>
            <div className='housing bar'  style ={{height: categoryTotal.Housing}}> Housing</div>
            <div className='travel bar'   style ={{height: categoryTotal.Transport}}> Travel</div>
            <div className='utils bar'    style ={{height: categoryTotal.Utility}}> Utilities</div>
            <div className='personel bar' style ={{height: categoryTotal.Personal}}>Personal</div>
            <div className='misc bar'     style ={{height: categoryTotal.Misc}}>Misc</div>

        </div>
    )
}