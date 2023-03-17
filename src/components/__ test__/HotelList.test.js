import {render,screen,waitFor} from '@testing-library/react';
import HotelList from '../HotelList';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';

describe("Test the HotelList component" ,()=>{
    test("render the hotelList component with Book Hotel button",async()=>{
        render(<Router><HotelList/></Router>)
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(3);
    })
    
test("render the hotelList component with header child component", () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  const linkElement = screen.getByText(/ Page/i);
  expect(linkElement).toBeInTheDocument();
});
it("should render the hotel names when api responds",async()=>{
    render(<Router><HotelList/></Router>);
    await waitFor(()=>{
      screen.getByText("Ervin Howell");
    });
  })
  it("should render the hotel location when api responds",async()=>{
    render(<Router><HotelList/></Router>)
    await waitFor(()=>{
        screen.getByText("Gwenborough")
    })
  })
  it("should render the hotel phone no when api responds",async()=>{
    render(<Router><HotelList/></Router>)
    await waitFor(()=>{
        screen.getByText("1-770-736-8031 x56442")
    })
  })
  it("should render the hotel website when api responds",async()=>{
    render(<Router><HotelList/></Router>)
    await waitFor(()=>{
        screen.getByText("anastasia.net")
    })
  })
})