import {screen,render} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import  HotelAdminPage from '../../pages/HotelAdminPage'
import LogOutPage from '../LogOutPage';
describe('Test the hotelAdmin component', () => {
    test("render the hotelAdmin component with logout child component", async() => {
        render(<Router><LogOutPage /></Router>);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(1);
      });
});
