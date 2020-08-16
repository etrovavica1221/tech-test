import React from 'react';
import { render } from "@testing-library/react";
import SearchResults from '../components/SearchResults';

describe("SearchResults", () => {
    const results = [
        "https://images-assets.nasa.gov/image/GSFC_20171208…e_e001517/GSFC_20171208_Archive_e001517~thumb.jpg",
        "https://images-assets.nasa.gov/image/PIA09322/PIA09322~thumb.jpg"
    ]; 
 
    it('renders correctly', () => {
        const { asFragment } = render(<SearchResults results={results}/>);
        expect(asFragment()).toMatchSnapshot();
    })

    it('renders the correct amount of SearchResults components', () => {
        const { getByTestId } = render(<SearchResults results={results} />)

        expect(getByTestId("resultTest")).toHaveClass("SearchResults");
    })
})
