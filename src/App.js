/* eslint-disable import/no-anonymous-default-export */
import React, {useState} from 'react'

import './style/App.css'

import Navbar from './components/Navbar'
import Box from './components/Box'
import Form from './components/Form'
import BarGraph from './components/BarGraph'

export default () => {
    const [expenseData, addExpenseData] = useState([
        {amount: 23, description: 'Takeout', catagory: 'Food'},
        {amount: 354, description: 'Electricity Bill', catagory:'Utility'},
        {amount: 98, description: 'Travel Pass', catagory:'Transport'},
        {amount: 900, description: 'Rent', catagory:'Housing'},
        {amount: 60, description: 'Bought game', catagory:'Personal'},
        {amount: 400, description: 'Groceries', catagory:'Food'},
        {amount: 120, description: 'Water Bill', catagory:'Utility'},
        {amount: 560, description: 'Petrol', catagory:'Transport'},
        {amount: 350, description: 'Home Comodities', catagory:'Personal'},
        {amount: 90, description: 'Repair', catagory:'Housing'},
        {amount: 135, description: 'Dine out', catagory:'Food'},
        {amount: 232, description: 'Dog Food', catagory:'Misc'},
        {amount: 80, description: 'Medicine', catagory:'Misc'},
    ])

    let handleSubmit = e => {
        e.preventDefault();

        // console.log(e.target[2].value)

        let arr = {amount: parseInt(e.target[0].value), description:e.target[1].value, catagory: e.target[2].value }
        addExpenseData( expenseData => [...expenseData, arr])

        document.querySelector('form').reset()
    }

    return (
        <div className='container' onSubmit= {handleSubmit}>
            <Navbar/>
            <Form/>
            <BarGraph data={expenseData}/>
            <Box clas='box1' data={expenseData} />
        </div>
    )
}