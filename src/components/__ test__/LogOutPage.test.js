import {render,screen} from '@testing-library/react';
import { BrowserRouter as Router  } from 'react-router-dom';
import LogOutPage from '../LogOutPage';

describe("Test the logout component",()=>{
    test ("render the logout component with logout button ",async()=>{
        render(<Router><LogOutPage/></Router>)
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(1);
    })
})