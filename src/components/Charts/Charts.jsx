import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";

const Chart = () => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      setDailyData(await fetchDailyData());
    };
  });

  return (
    <div>
      <h1>Charts</h1>
    </div>
  );
};

export default Chart;
