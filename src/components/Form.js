import React from 'react'

import '../style/Form.css'

import Input from './Input'
import Button from './Button'
import Select from './Select'

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {

    return(
        <form  className='form '>

            <Input clas='amountInput' type='number' placeholder='Amount'/>
            <Input clas='descripInput' type='text' placeholder='Description'/>
            <Select/>
            <Button clas='subButton primaryColor shadow' name='Add'/>

        </form>

    )
}