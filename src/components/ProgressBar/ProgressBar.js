/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size, width = 400 }) => {
  if (value < 0 || value > 100) {
    throw new Error("value must be in between 0 and 100");
    return;
  }

  return (
    <Wrapper>
      <Label for="progressbar" aria-labelledby="percentage">
        {value}%{" "}
      </Label>
      <Bar style={SIZES[size]} width={width}>
        <Progress
          id="progressbar"
          min={0}
          max={100}
          aria-valuenow={value}
          value={value}
        ></Progress>
        <Value style={SIZES[size]} widthPercent={value}></Value>
      </Bar>
    </Wrapper>
  );
};

const SIZES = {
  large: {
    "--bar-height": 16 + "px",
    "--border-radius": 8 + "px",
    "--inner-padding": 4 + "px",
    "--inner-border-radius": 4 + "px",
  },
  medium: {
    "--bar-height": 12 + "px",
    "--border-radius": 4 + "px",
  },
  small: {
    "--bar-height": 8 + "px",
    "--border-radius": 4 + "px",
  },
};

const Label = styled.div`
  min-width: 50px;
  padding-right: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Bar = styled.div`
  width: ${(p) => p.width}px;
  background-color: ${COLORS.transparentGray15};
  border-radius: var(--border-radius);
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  padding: var(--inner-padding);
`;

const Value = styled.div`
  width: ${(p) => p.widthPercent}%;
  height: var(--bar-height);
  background-color: ${COLORS.primary};
  border-radius: var(--inner-border-radius, var(--border-radius));
  border-top-right-radius: ${(p) => p.widthPercent <= 99 && 0}px;
  border-bottom-right-radius: ${(p) => p.widthPercent <= 99 && 0}px;
`;

const Progress = styled.progress`
  &[value] {
    display: none;
  }
`;

export default ProgressBar;
