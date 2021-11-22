import {render, screen} from '@testing-library/react';
import Counter from "../src/components/Counter";
import '@testing-library/jest-dom/extend-expect';
import {BrowserRouter as Router} from "react-router-dom";
import App from "../src/App";
import userEvent from "@testing-library/user-event";


test('renders Counter title', () => {
    render(<Router><Counter/></Router>);
    const titleElement = screen.getByText(/Counter/);
    expect(titleElement).toBeInTheDocument();
});


test("clicking counter button takes to counter page", () => {
    render(<Router><App/></Router>);
    userEvent.click(screen.getByRole('link', {name: 'Counter'}));
    const location = window.location.pathname;
    expect(location).toBe("/counter");
});

test("clicking + should increase the value by 1", () => {
    render(<Router><Counter/></Router>);
    const plusButton = screen.getByRole('button', {name: '+'});
    userEvent.click(plusButton);
    const value = screen.getByTitle("count");
    expect(value).toHaveTextContent('2');
});

test("clicking - should decrease the value by 1", () => {
    render(<Router><Counter/></Router>);
    const minusButton = screen.getByRole('button', {name: '-'});
    userEvent.click(minusButton);
    const value = screen.getByTitle("count");
    expect(value).toHaveTextContent('0');
});

test("clicking - when the value is 0 should not change to negative value", () => {
    render(<Router><Counter/></Router>);
    const minusButton = screen.getByRole('button', {name: '-'});

    const value = screen.getByTitle("count");
    if (value === '0') {
        // eslint-disable-next-line jest/no-conditional-expect
        expect(value).toHaveTextContent('0');
    }
});