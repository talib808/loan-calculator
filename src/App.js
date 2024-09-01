import React, { useState } from 'react';
import LoanForm from './components/LoanForm';
import LoanSummary from './components/LoanSummary';
import SubmitButton from './components/SubmitButton';
import "./App.css"

// Simulated API function
const submitLoanDetails = async (loanDetails) => {
    // Simulating API delay
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                status: 200,
                data: {
                    message: 'Loan details submitted successfully!',
                    loanDetails,
                },
            });
        }, 1000); // Simulate a delay of 1 second
    });
};

function App() {
    const [loanDetails, setLoanDetails] = useState(null);
    const [monthlyRepayment, setMonthlyRepayment] = useState(null);
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const calculateRepayment = ({ amount, term, interestRate }) => {
        const monthlyRate = interestRate / 100 / 12;
        const numberOfPayments = term * 12;
        const repayment = amount * monthlyRate / (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
        setLoanDetails({ amount, term, interestRate });
        setMonthlyRepayment(repayment);
    };

    const handleSubmit = async () => {
        try {
            const response = await submitLoanDetails(loanDetails);
            setConfirmationMessage(response.data.message);
        } catch (error) {
            setConfirmationMessage('Error submitting details.');
        }
    };

    return (
        <div className="App">
            <h1>Loan Calculator</h1>
            <LoanForm onCalculate={calculateRepayment} />
            {monthlyRepayment && (
                <>
                    <LoanSummary {...loanDetails} monthlyRepayment={monthlyRepayment} />
                    <SubmitButton onSubmit={handleSubmit} />
                </>
            )}
            {confirmationMessage && <p>{confirmationMessage}</p>}
        </div>
    );
}

export default App;
