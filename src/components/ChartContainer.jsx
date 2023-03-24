import styled from "styled-components";
import "../index.css";
import * as React from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import FinancialChartMultipleData from "./Graph";
const ChartContainer = styled.div`
  margin-top: 50px;
  background-color: "white";
  display: grid;
`;
const Option = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  p {
    color: rgba(111, 113, 119, 1);
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
  }
`;
const Options = styled.div`
  display: flex;
  gap: 33px;
`;
export default function Chart() {
  const handle = useFullScreenHandle();

  return (
    <FullScreen handle={handle} className="chart">
      <ChartContainer style={{ width: "100%" }}>
        <Options>
          <Option onClick={handle.enter}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 3H21V9"
                stroke="#6F7177"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 21H3V15"
                stroke="#6F7177"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21 3L14 10"
                stroke="#6F7177"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M3 21L10 14"
                stroke="#6F7177"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Fullscreen</p>
          </Option>
          <Option>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#6F7177"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 8V16"
                stroke="#6F7177"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8 12H16"
                stroke="#6F7177"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>Compare</p>
          </Option>
        </Options>
        <FinancialChartMultipleData style={{ width: "100%" }} />
      </ChartContainer>
    </FullScreen>
  );
}
