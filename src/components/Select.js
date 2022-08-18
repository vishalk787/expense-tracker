import React from 'react'

export default () => {

    return (

            <select id='category' name='categoty' className='corner shadow' >
                <option value=''>Categories</option>
                <option value='Food' >Food</option>
                <option value='Utility' >Utility</option>
                <option value='Transport' >Transport</option>
                <option value='Housing' >Housing</option>
                <option value='Personal' >Personal</option>
                <option value='Misc' >Misc</option>
            </select>

    )
}