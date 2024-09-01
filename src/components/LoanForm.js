import React, { useState } from 'react';

const LoanForm = ({ onCalculate }) => {
    const [amount, setAmount] = useState('');
    const [term, setTerm] = useState('');
    const [interestRate, setInterestRate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (amount && term && interestRate) {
            onCalculate({ amount, term, interestRate });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Loan Amount:</label> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
            </div>
            <div>
                <label>Loan Term (years):</label>
                <input type="number" value={term} onChange={(e) => setTerm(e.target.value)} required />
            </div>
            <div>
                <label>Interest Rate (%):</label> &nbsp;&nbsp;&nbsp;
                <input type="number" value={interestRate} onChange={(e) => setInterestRate(e.target.value)} required />
            </div>
            <button type="submit">Calculate</button>
        </form>
    );
};

export default LoanForm;
