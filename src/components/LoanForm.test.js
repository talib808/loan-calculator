import { render, screen, fireEvent } from '@testing-library/react';
import LoanForm from './LoanForm';

test('renders loan form correctly', () => {
    render(<LoanForm onCalculate={jest.fn()} />);
    expect(screen.getByLabelText(/Loan Amount/i)).toBeInTheDocument();
});

test('calls onCalculate when form is submitted', () => {
    const onCalculate = jest.fn();
    render(<LoanForm onCalculate={onCalculate} />);
    fireEvent.click(screen.getByText(/Calculate/i));
    expect(onCalculate).toHaveBeenCalled();
});
