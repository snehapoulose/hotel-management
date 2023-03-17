import {render,screen} from '@testing-library/react';
import Login from '../../pages/Login';
import { BrowserRouter as Router } from 'react-router-dom';

describe("Test the login component",()=>{
    test("render the login form with login button and back button", async ()=>{
        render(<Router><Login/></Router>);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(2);
    });
    test(" render the login form should correctly set default option for the role", () => {
        render(<Router><Login/></Router>)
        expect(screen.getByRole('option', { name: 'Select a role' }).selected).toBe(true)
      })
      test("render the login form with correct number of role options ", () => {
        render(<Router><Login/></Router>)
        expect(screen.getAllByRole('option').length).toBe(4)
      })
    test ("render the login form with username label",async()=>{
        render(<Router><Login/></Router>)
        expect(screen.getByLabelText('Username:')).toBeInTheDocument();
    })
    test ("render the login form with password label",async()=>{
        render(<Router><Login/></Router>)
        expect(screen.getByLabelText('Password:')).toBeInTheDocument();
    })
    // test ("render the login form with input textbox",async()=>{
    //     render(<Router><Login/></Router>)
    //     expect(screen.getAllByRole('input')).toBeInTheDocument();
    // })
})