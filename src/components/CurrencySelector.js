import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { currency, dispatch } = useContext(AppContext);

    const handleCurrencyChange = (e) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: e.target.value
        });
    };

    return (
        <div className="form-group">
            <label>Select Currency:</label>
            <select 
                className="custom-select" 
                style={{ backgroundColor: 'green', color: 'white' }} 
                value={currency} 
                onChange={handleCurrencyChange}
            >
                <option value="£">£ - Pound Sterling</option>
                <option value="$">$ - US Dollar</option>
                <option value="€">€ - Euro</option>
                {/* Add more currencies if needed */}
            </select>
        </div>
    );
};

export default CurrencySelector;