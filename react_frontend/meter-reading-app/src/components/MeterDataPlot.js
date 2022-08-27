import React from "react";
import { Line } from "@ant-design/plots";
import { useQuery } from "react-query";

const METER_URL = "http://127.0.0.1:5000/meter";

const styles = {
  padding: "80px",
};

function MeterDataPlot() {
  const { isLoading, error, data } = useQuery("meterData", () =>
    fetch(METER_URL)
      .then((res) => res.json())
      .catch((error) => console.log(error))
  );

  const newData = data?.map((data) => {
    return {
      time: new Date(data.time * 1000).toLocaleString(),
      reading: data.meter_reading,
    };
  });

  const config = {
    data: newData,
    padding: "auto",
    xField: "time",
    yField: "reading",
    xAxis: {
      tickCount: 5,
    },
    slider: {
      start: 0.1,
      end: 0.5,
    },
    smooth: true,
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
