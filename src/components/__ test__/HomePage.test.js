import { render, screen, waitFor } from "@testing-library/react";
// import App from './App';
import HomePage from "../HomePage";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../Navbar";

test("test child component", () => {
  render(
    <Router>
      <Navbar />
    </Router>
  );
  const linkElement = screen.getByText(/ Ark/i);
  expect(linkElement).toBeInTheDocument();
});
describe('HomePage Component', () => {
  it("should render the hotel names when api responds",async()=>{
    render(<Router><HomePage/></Router>);
    await waitFor(()=>{
      screen.getByText("Ervin Howell");
    });
  })
  it("should render the hotel location when api responds",async()=>{
    render(<Router><HomePage/></Router>);
    await waitFor(()=>{
      screen.getByText("South Christy");
    });
  })
  it("should render the hotel phone no when api responds",async()=>{
    render(<Router><HomePage/></Router>);
    await waitFor(()=>{
      screen.getByText("024-648-3804");
    });
  })
  it("should render the hotel website when api responds",async()=>{
    render(<Router><HomePage/></Router>);
    await waitFor(()=>{
      screen.getByText("conrad.com");
    });
  })
});

