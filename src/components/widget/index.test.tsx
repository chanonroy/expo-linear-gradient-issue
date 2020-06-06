import React from "react"
import { render, waitForElement } from "@testing-library/react-native"
import Widget from "."

describe("Widget", () => {
  it("returns a wiget", async () => {
    const { queryByTestId } = render(<Widget />)
    await waitForElement(() => [
      expect(queryByTestId("widget")),
    ])

    expect(queryByTestId("widget")).toBeTruthy()
  })
})
