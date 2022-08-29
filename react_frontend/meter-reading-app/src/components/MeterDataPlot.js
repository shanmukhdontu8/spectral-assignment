import React from "react";
// https://charts.ant.design/en/examples/line/basic#line-slider
import { Line } from "@ant-design/plots";
// https://react-query-v2.tanstack.com/
import { useQuery } from "react-query";

// Flask server URL endpoint
const METER_URL = "http://127.0.0.1:5000/meter";

const styles = {
  padding: "80px",
};

function MeterDataPlot() {
  // `MeterDataPlot` Function makes an API call to populate line slider chart
  const { isLoading, error, data } = useQuery("meterData", () =>
    fetch(METER_URL)
      .then((res) => res.json())
      .catch((error) => console.log(error))
  );

  const newData = data?.map((data) => {
    return {
      time: new Date(data.time * 1000).toLocaleString("en-US", {
        timezone: "UTC",
      }),
      units: data.meter_reading,
    };
  });

  const config = {
    data: newData,
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
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: ";

  return (
    <div style={styles}>
      <h2>gRPC meter reading</h2>
      <Line {...config} />
    </div>
  );
}

export default MeterDataPlot;
