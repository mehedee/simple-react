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


test("clicking counter button takes to counter page",()=>{
    render(<Router><App/></Router>);
    userEvent.click(screen.getByRole('link',{name: 'Counter'}));
    const location  = window.location.pathname;
    expect(location).toBe("/counter");
});