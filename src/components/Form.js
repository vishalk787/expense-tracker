import React from 'react'

import '../style/Form.css'

import Input from './Input'
import Button from './Button'
import Select from './Select'

export default () => {

    return(
        <form  className='form '>

            <Input clas='amountInput' type='number' placeholder='Amount'/>
            <Input clas='descripInput' type='text' placeholder='Discription'/>
            <Select/>
            <Button clas='subButton primaryColor shadow' name='Add'/>

        </form>

    )
}