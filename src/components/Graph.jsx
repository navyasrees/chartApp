import React, { useState, useEffect, useRef } from "react";
import { IgrFinancialChart } from "igniteui-react-charts";
import { IgrFinancialChartModule } from "igniteui-react-charts";
import StocksHistory from "./StockHistory.tsx";
import styled from "styled-components";
import "../index.css";
IgrFinancialChartModule.register();
const RangeBar = styled.div`
  display: flex;
  gap: 32px;
  background-color: white;
  position: relative;
  left: 500px;
  bottom: 50px;
  width: 50%;
  margin: 0;
  gap: 34px;
  padding-right: 40px;
`;
const Button = styled.button`
  background-color: white;
  border: none;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #6f7177;
`;
const FinancialChartMultipleData = () => {
  const [data, setData] = useState([]);
  // let copyData = data;
  const [count, setCount] = useState(0);
  const [copyData, setCopyData] = useState([]);
  const [active, setActive] = useState(7);
  useEffect(() => {
    StocksHistory.getMultipleStocks().then((stocks) => {
      setData(stocks);
    });
    StocksHistory.getMultipleStocks().then((stocks) => {
      setCopyData(stocks);
    });
  }, []);
  function oneDaydata() {
    console.log("one day data");
    setData(copyData[0].slice(-23));
    console.log("count", count);
    console.log(copyData, "data copy");
    setActive(1);
  }
  function threeDayData() {
    console.log("one day data");
    setData(copyData[0].slice(-79));
    console.log("count", count);
    console.log(copyData, "data copy");
    setActive(2);
  }
  function oneWeekData() {
    console.log("one day data");
    setData(copyData[0].slice(-161));
    console.log("count", count);
    console.log(copyData, "data copy");
    setActive(3);
  }
  function oneMonthData() {
    console.log("one day data");
    setData(copyData[0].slice(-744));
    console.log("count", count);
    console.log(copyData, "data copy");
    setActive(4);
  }
  function sixMonthData() {
    console.log("one day data");
    setData(copyData[0].slice(-1000));
    console.log("count", count);
    console.log(copyData, "data copy");
    setActive(5);
  }
  function oneYearData() {
    console.log("one day data");
    setData(copyData[0].slice(-2000));
    console.log("count", count);
    console.log(copyData, "data copy");
    setActive(6);
  }
  function TotalData() {
    console.log("one day data");
    setData(copyData[0]);
    console.log("count", count);
    console.log(copyData, "data copy");
    setActive(7);
  }
  return (
    <div className="container sample">
      <RangeBar>
        <Button
          style={{}}
          onClick={oneDaydata}
          className={active == 1 && "activeButton"}
        >
          1d
        </Button>
        <Button
          style={{}}
          onClick={threeDayData}
          className={active == 2 && "activeButton"}
        >
          3d
        </Button>
        <Button
          style={{}}
          onClick={oneWeekData}
          className={active == 3 && "activeButton"}
        >
          1w
        </Button>
        <Button
          style={{}}
          onClick={oneMonthData}
          className={active == 4 && "activeButton"}
        >
          1y
        </Button>
        <Button
          style={{}}
          onClick={sixMonthData}
          className={active == 5 && "activeButton"}
        >
          6y
        </Button>
        <Button
          style={{}}
          onClick={oneYearData}
          className={active == 6 && "activeButton"}
        >
          1y
        </Button>
        <Button
          style={{}}
          onClick={TotalData}
          className={active == 7 && "activeButton"}
        >
          max
        </Button>
      </RangeBar>

      <div className="container" style={{ width: "1050px", height: "500px" }}>
        <IgrFinancialChart
          width="100%"
          backgroundColor="black"
          height="100%"
          chartType="Line"
          brushes="rgba(75, 64, 238, 1) red"
          thickness={2}
          yAxisMajorStroke="transparent"
          xAxisMajorStroke="#e7e8ec"
          volumeBrushes="#e7e8ec"
          volumeOutlines="#e7e8ec"
          volumeType="Column"
          volumeThickness={2}
          xAxisLabelTextColor="transparent"
          yAxisLabelTextColor="transparent"
          zoomSliderType="None"
          toolTipType="None"
          dataSource={data}
          isToolbarVisible="true"
          xAxisStroke="transparent"
          crosshairsAnnotationYAxisBackground="black"
          crosshairsAnnotationXAxisBackground="transparent"
          crosshairsAnnotationXAxisTextColor="transparent"
          crosshairStrokeThickness={20}
          crosshairStrokeDashArray={[5, 3]}
        />
      </div>
    </div>
  );
};

export default FinancialChartMultipleData;
