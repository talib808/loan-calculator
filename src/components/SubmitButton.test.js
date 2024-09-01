import { render, screen, fireEvent } from '@testing-library/react';
import SubmitButton from './SubmitButton';

test('calls onSubmit when button is clicked', () => {
    const handleSubmit = jest.fn();
    render(<SubmitButton onSubmit={handleSubmit} />);
    
    fireEvent.click(screen.getByText(/Submit for Quote/i));
    
    expect(handleSubmit).toHaveBeenCalledTimes(1);
});