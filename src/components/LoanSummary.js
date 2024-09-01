import React from 'react';

const LoanSummary = ({ amount, term, interestRate, monthlyRepayment }) => (
    <div>
        <h2>Loan Summary</h2>
        <p>Amount: Rs {amount}</p>
        <p>Term: {term} years</p>
        <p>Interest Rate: {interestRate}%</p>
        <p>Estimated Monthly Repayment: Rs {monthlyRepayment.toFixed(2)}</p>
    </div>
);

export default LoanSummary;
