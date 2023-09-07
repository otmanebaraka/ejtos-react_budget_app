import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget, dispatch, expenses, currency } = useContext(AppContext);
    const [newVal,setVal] = useState(budget);

    const handleInput = (val)=>{
        if (val > newVal) {
            setVal(newVal + 10);
        } else {
            setVal(newVal - 10);
        }
    
        const totalSpending = expenses.reduce((total, expense) => total + expense.cost, 0);
    
        if (newVal > 20000) {
            alert("Budget cannot exceed £20,000");
        } else if (newVal < totalSpending) {
            alert("Budget cannot be set lower than the total spending");
        } else {
            dispatch({
                type: "SET_BUDGET",
                payload: newVal
            });
        }
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
                value={newVal}
                type="number"
                onChange={(e)=> handleInput(e.target.value)}
            >
            </input>
        </div>
    );
};
export default Budget;