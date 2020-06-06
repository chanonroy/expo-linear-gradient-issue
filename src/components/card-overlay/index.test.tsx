import React from "react"
import { render, waitForElement } from "@testing-library/react-native"
import CardsOverlay from "./index.native"

describe("Linear Gradient", () => {
  it("can display the linear gradient", async () => {
    const { queryByTestId } = render(<CardsOverlay />)
    await waitForElement(() => [
      expect(queryByTestId("linear-gradient")),
    ])

    expect(queryByTestId("linear-gradient")).toBeTruthy()
  })
})
