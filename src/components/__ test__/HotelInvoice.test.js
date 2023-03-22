import {screen,render} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';
import HotelInvoice from '../../pages/HotelInvoice';
describe('Test the hotelInvoice component', () => {
test("render the hotelInvoice component with header child component", () => {
  render(<Router><Header /></Router>);
  const linkElement = screen.getByText(/ Page/i);
  expect(linkElement).toBeInTheDocument();
});
});
