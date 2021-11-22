import { render, screen } from '@testing-library/react';
import Counter from "../src/components/Counter";
import '@testing-library/jest-dom/extend-expect';
import {BrowserRouter as Router, Route} from "react-router-dom";
import About from "../src/components/About";


test('renders About page',()=>{
    render(<Router><About/></Router>);
    const titleElement = screen.getByText(/About/);
    expect(titleElement).toBeInTheDocument();
});