import { render } from "@testing-library/react";
import Body from "../Body";
import restaurentDataList from "../../utils/mockData";
import { act } from "react-dom/test-utils";


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(restaurentDataList);  
        }
    })
})

it("Should render the Body Component with Search", async () => {
    
    await act(async () => render(<Body />))
    
});