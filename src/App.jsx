import {
  Container,
  Rate,
  Unit,
  RateUnit,
  ConversionRate,
  Navigationbar,
  Title,
} from "./styles";
import * as React from "react";
import "./index.css";
import Chart from "./components/ChartContainer";
import { label, label2 } from "./components/StockHistory.tsx";
function App() {
  const [displayChart, setDisplayChart] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
  const [display, setDisplay] = React.useState(false);
  // console.log("app", label2);

  return (
    <Container>
      <RateUnit>
        {label && <Rate>{label}</Rate>}
        {label && <Unit>USD</Unit>}
      </RateUnit>
      {label && label2 && (
        <ConversionRate>
          {label - label2 > 0 ? "+" : ""} {(label - label2).toFixed(3)}
          {" (" + (((label - label2) / label) * 100).toFixed(3) + "%)"}
        </ConversionRate>
      )}
      <Navigationbar className="navbar">
        <Title
          onClick={() => {
            setIsActive(false);
            setDisplayChart(false);
          }}
        >
          Summary
        </Title>
        <Title
          // style={{ color: "red" }}
          className={isActive && "ActiveElement"}
          onClick={() => {
            console.log("Chart display");
            setDisplayChart(!displayChart);
            setIsActive((current) => !current);
          }}
        >
          Chart
        </Title>
        <Title
          onClick={() => {
            setIsActive(false);
            setDisplayChart(false);
          }}
        >
          Statistics
        </Title>
        <Title
          onClick={() => {
            setIsActive(false);
            setDisplayChart(false);
          }}
        >
          {" "}
          Analysis{" "}
        </Title>
        <Title
          onClick={() => {
            setIsActive(false);
            setDisplayChart(false);
          }}
        >
          {" "}
          Settings{" "}
        </Title>
      </Navigationbar>
      <hr className="horizanalLine" />
      {displayChart && <Chart />}
    </Container>
  );
}

export default App;
