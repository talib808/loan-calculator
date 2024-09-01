import { render, screen } from '@testing-library/react';
import LoanSummary from './LoanSummary';

test('renders loan summary correctly', () => {
    render(<LoanSummary amount={10000} term={5} interestRate={3.5} monthlyRepayment={200} />);
    
    expect(screen.getByText(/Amount: \$10000/i)).toBeInTheDocument();
    expect(screen.getByText(/Term: 5 years/i)).toBeInTheDocument();
    expect(screen.getByText(/Interest Rate: 3.5%/i)).toBeInTheDocument();
    expect(screen.getByText(/Estimated Monthly Repayment: \$200.00/i)).toBeInTheDocument();
});