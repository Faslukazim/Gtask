import React, { useState, useEffect } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import Navbar from "../components/Navbar";

export default function Home() {
  const [serverData, setServerData] = useState([])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("serverData"));

    setServerData(data);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container-fluid homeContainer p-3 w-75 mt-5">
        <div className="row mt-5">
          <div className="col-lg-12 col-sm-12">
            <ResponsiveContainer width="99%" aspect={3}>
              <LineChart data={serverData}>
                <XAxis
                  dataKey="student"
                  stroke="white"
                  tick={{ fontSize: 10 }}
                  strokeWidth={2}
                  interval={"preserveStartEnd"}
                />
                <YAxis stroke="white" strokeWidth={2} tick={{ fontSize: 10 }} />
                <Legend />
                <CartesianGrid style={{ opacity: "30%" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#00ebff",
                    textShadow: "0px 1px 3px black",
                    border: "transparent",
                  }}
                />
                <Line
                  dataKey="mark"
                  activeDot={{ r: 4 }}
                  type={"monotone"}
                  stroke="greenyellow"
                />
                <Line
                  dataKey="attendance"
                  activeDot={{ r: 4 }}
                  type={"monotone"}
                  stroke="orangered"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </>
  );
}
