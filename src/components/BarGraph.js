import React from 'react'

import '../style/BarGraph.css'

export default ({data}) => {

    let sum = 0
    let obj = { Food: 0, Utility: 0, Transport: 0, Housing: 0, Personal: 0, Misc: 0 } 
    data.map( 
        item => {
            sum += item.amount
            obj[item.catagory ] += item.amount
        } 
    )

    for (let key in obj) {
        let percentage = obj[key] / sum * 100
        obj[key] = Math.floor((percentage / 100 * 530)*2.5)
    }
    console.log(sum, obj)

    return (
        <div className='graph '>
            <div className='food bar' style ={{height: obj.Food}} > Food</div>
            <div className='housing bar'  style ={{height: obj.Housing}}> Housing</div>
            <div className='travel bar' style ={{height: obj.Transport}}> Travel</div>
            <div className='utils bar' style ={{height: obj.Utility}}> Utilities</div>
            <div className='personel bar' style ={{height: obj.Personal}}>Personal</div>
            <div className='misc bar' style ={{height: obj.Misc}}>Misc</div>

        </div>
    )
}