import React, {useState} from 'react'

import './style/App.css'

import Navbar from './components/Navbar'
import Box from './components/Box'
import Form from './components/Form'
import BarGraph from './components/BarGraph'

export default () => {
    const [expenseData, addExpenseData] = useState([
        {amount: 23, discription: 'Takeout', catagory: 'Food'},
        {amount: 354, discription: 'Electricity Bill', catagory:'Utility'},
        {amount: 98, discription: 'Travel Pass', catagory:'Transport'},
        {amount: 900, discription: 'Rent', catagory:'Housing'},
        {amount: 60, discription: 'Bought game', catagory:'Personal'},
        {amount: 400, discription: 'Groceries', catagory:'Food'},
        {amount: 120, discription: 'Water Bill', catagory:'Utility'},
        {amount: 560, discription: 'Petrol', catagory:'Transport'},
        {amount: 350, discription: 'Home Comodities', catagory:'Personal'},
        {amount: 90, discription: 'Repair', catagory:'Housing'},
        {amount: 135, discription: 'Dine out', catagory:'Food'},
        {amount: 232, discription: 'Dog Food', catagory:'Misc'},
        {amount: 80, discription: 'Medicine', catagory:'Misc'},
    ])

    let handleSubmit = e => {
        e.preventDefault();

        // console.log(e.target[2].value)

        let arr = {amount: parseInt(e.target[0].value), discription:e.target[1].value, catagory: e.target[2].value }
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