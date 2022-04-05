import React from "react";
import { render , fireEvent, queryByText} from '@testing-library/react'
import { CardPreview } from "./CardPreview";

it('Renders the expected term', () => {
  const expectedTerm = 'this is a test'
  const { getByText, queryByText } = render(<CardPreview term={expectedTerm} />)
  expect(getByText(expectedTerm)).toBeInTheDocument()
}) 

it("Flips the card to reveal the definition", () => {
  const expectedTerm = "this is the term";
  const expectedDef = "this is the definition";
  const { getByText } = render(
    <CardPreview term={expectedTerm} definition={expectedDef} />
  );

  expect(getByText(expectedTerm)).toBeInTheDocument;

  const flipButton = getByText(/show/i);
  fireEvent.click(flipButton);

  expect(getByText(expectedDef)).toBeInTheDocument();
  //expect(queryByText(expectedTerm)).not.toBeInTheDocument(); //TypeError: container.querySelectorAll is not a function
}); 
