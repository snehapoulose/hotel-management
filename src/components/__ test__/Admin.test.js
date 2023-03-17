import {render,screen,waitFor} from "@testing-library/react";
import Admin from "../../pages/Admin";
import { BrowserRouter as Router } from "react-router-dom";
describe('Test the admin component', () => {
    test("render the admin page with  add button and delete button",async()=>{
        render (<Router><Admin/></Router>)
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(2);
    })
    test("render the admin page with users list",async()=>{
        render(<Router><Admin/></Router>)
        const linkElement = screen.getByText(/list/i);
        expect(linkElement).toBeInTheDocument;
    })
    it("should render the hotel names when api responds",async()=>{
        render(<Router><Admin/></Router>);
        await waitFor(()=>{
          screen.getByText("Kurtis Weissnat");
        });
      })
      it("should render the hotel phone no when api responds",async()=>{
        render(<Router><Admin/></Router>);
        await waitFor(()=>{
          screen.getByText("024-648-3804");
        });
      })
      it("should render the hotel website when api responds",async()=>{
        render(<Router><Admin/></Router>);
        await waitFor(()=>{
          screen.getByText("Rey.Padberg@karina.biz");
        });
      })
});
