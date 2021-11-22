import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {BrowserRouter as Router} from "react-router-dom";
import About from "../src/components/About";


test('Clicking About link renders About page', () => {
    render(<Router><About/></Router>);
    const titleElement = screen.getByText(/About/);
    expect(titleElement).toBeInTheDocument();
});