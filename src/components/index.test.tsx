import React from "react"
import { render, waitForElement } from "@testing-library/react-native"
import CardsOverlay from "./index.native"

describe("Cards", () => {
  it("returns cards that are only meant to be displayeds", async () => {
    const { getByTestId } = render(<CardsOverlay />)
    await waitForElement(() => [
      expect(getByTestId("linear-gradient").toBeTruthy()),
    ])
  })
})
