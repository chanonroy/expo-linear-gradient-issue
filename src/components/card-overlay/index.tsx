import React, { ReactElement } from "react"
import styled from "styled-components/native"

const CardOverlay = styled.View`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  pointer-events: none;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75)
  );
`

const CardsOverlay = (): ReactElement => <CardOverlay />

export default CardsOverlay
