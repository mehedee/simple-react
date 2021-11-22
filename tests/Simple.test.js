import { render, screen } from '@testing-library/react';
import Counter from "../src/components/Counter";
import '@testing-library/jest-dom/extend-expect';


test('renders Counter title', () => {
    render(<Counter />);
    const titleElement = screen.getByText(/Counter/);
    expect(titleElement).toBeInTheDocument();
});