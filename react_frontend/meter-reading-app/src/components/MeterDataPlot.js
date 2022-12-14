import React from "react";
// https://charts.ant.design/en/examples/line/basic#line-slider
import { Line, Histogram } from "@ant-design/plots";
// https://react-query-v2.tanstack.com/
import { useQuery } from "react-query";
// https://mhnpd.github.io/react-loader-spinner/
import { Bars } from "react-loader-spinner";

// Flask server URL endpoint
const METER_URL = process.env.REACT_APP_MIDDLEWARE_HOST;
const styles = {
  padding: "80px",
};

const loaderStyles = {
  left: "45%",
  position: "absolute",
  top: "40%",
};

function MeterDataPlot() {
  // const [threshold, setThreshold] = useState(250);

  // const [thresHoldSubmit, setThresHoldSubmit] = useState(250);

  // const onChangeThreshold = (event) => {
  //   setThreshold(event.target.value);
  // };
  // `MeterDataPlot` Function makes an API call to populate line slider chart
  const { isLoading, error, data } = useQuery("meterData", () =>
    fetch(METER_URL)
      .then((res) => res.json())
      .catch((error) => console.log(error))
  );

  const meterData = data?.map((data) => {
    return {
      time: new Date(data.time * 1000).toLocaleString("en-US", {
        timezone: "UTC",
      }),
      units: data.meter_reading,
    };
  });

  const hourlyFrequency = data
    ?.filter((m) => m.meter_reading > 250)
    ?.map((data) => {
      return {
        time: new Date(data.time * 1000).getHours(),
      };
    });
  // console.log("hourlyFrequency", hourlyFrequency);

  const config = {
    data: meterData,
    padding: "auto",
    xField: "time",
    yField: "units",
    xAxis: {
      tickCount: 5,
    },
    slider: {
      start: 0,
      end: 1,
    },
    smooth: true,
    legend: {
      layout: "horizontal",
      position: "right",
    },
  };
  const configHistogram = {
    data: hourlyFrequency,
    binField: "time",
    binWidth: 1,
    tooltip: {
      showMarkers: false,
      position: "top",
    },
  };
  if (isLoading)
    return (
      <div style={loaderStyles}>
        <Bars color="#00BFFF" height={100} width={100} />
      </div>
    );

  if (error) return "An error has occurred: ";

  return (
    <div style={styles}>
      <h2>gRPC meter reading</h2>
      <Line {...config} />
      {/* <input onChange={(event) => onChangeThreshold(event)}></input> */}
      {/* <button onClick={() => setThresHoldSubmit(threshold)}>Click me</button> */}
      <h2>Hourly meter reading frequency</h2>
      <Histogram {...configHistogram} />
    </div>
  );
}

export default MeterDataPlot;
