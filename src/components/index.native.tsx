import React, { ReactElement } from "react"
import { LinearGradient } from "expo-linear-gradient"

const CardsOverlay = (): ReactElement => (
  <LinearGradient
    testID="linear-gradient"
    colors={["rgba(0, 0, 0, 0)", "rgba(0, 0, 0, 0.75)"]}
    start={[0, 0]}
    end={[0, 1]}
    style={{
      position: "absolute",
      left: 0,
      top: 0,
      width: "100%",
      height: "100%",
      borderRadius: 5,
    }}
  />
)

export default CardsOverlay
