import React from 'react'
import { ResponsiveLine } from "@nivo/line";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
// import { mockLineData as data } from "../data/mockData";

const LineChart = ({ isCustomLineColors = false, isDashboard = false }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const data = [
    {
      id: "May",
      color: tokens("dark").greenAccent[500],
      data: [
        {
          x: "Football",
          y: 101,
        },
        {
          x: "Cricket",
          y: 75,
        },
        {
          x: "Volleyball",
          y: 36,
        },
        {
          x: "Basketball",
          y: 216,
        },
        {
          x: "Games",
          y: 35,
        },
        {
          x: "Billiards",
          y: 236,
        },
        {
          x: "Trophies",
          y: 88,
        },
        {
          x: "Skating",
          y: 232,
        },
        {
          x: "Apparels",
          y: 281,
        },
        {
          x: "Fitness",
          y: 1,
        },
        {
          x: "Racket",
          y: 35,
        },
        {
          x: "Water",
          y: 14,
        },
      ],
    },
    {
      id: "Jun",
      color: tokens("dark").blueAccent[300],
      data: [
        {
          x: "Football",
          y: 212,
        },
        {
          x: "Cricket",
          y: 190,
        },
        {
          x: "Volleyball",
          y: 270,
        },
        {
          x: "Basketball",
          y: 9,
        },
        {
          x: "Games",
          y: 75,
        },
        {
          x: "Billiards",
          y: 175,
        },
        {
          x: "Trophies",
          y: 33,
        },
        {
          x: "Skating",
          y: 189,
        },
        {
          x: "Apparels",
          y: 97,
        },
        {
          x: "Fitness",
          y: 87,
        },
        {
          x: "Racket",
          y: 299,
        },
        {
          x: "Water",
          y: 251,
        },
      ],
    },
    {
      id: "Jul",
      color: tokens("dark").redAccent[200],
      data: [
        {
          x: "Football",
          y: 191,
        },
        {
          x: "Cricket",
          y: 136,
        },
        {
          x: "Volleyball",
          y: 91,
        },
        {
          x: "Basketball",
          y: 190,
        },
        {
          x: "Games",
          y: 211,
        },
        {
          x: "Billiards",
          y: 152,
        },
        {
          x: "Trophies",
          y: 189,
        },
        {
          x: "Skating",
          y: 152,
        },
        {
          x: "Apparels",
          y: 8,
        },
        {
          x: "Fitness",
          y: 197,
        },
        {
          x: "Racket",
          y: 107,
        },
        {
          x: "Water",
          y: 170,
        },
      ],
    },
  ];
  
  

  return (
    <ResponsiveLine
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: colors.grey[100],
            },
          },
          legend: {
            text: {
              fill: colors.grey[100],
            },
          },
          ticks: {
            line: {
              stroke: colors.grey[100],
              strokeWidth: 1,
            },
            text: {
              fill: colors.grey[100],
            },
          },
        },
        legends: {
          text: {
            fill: colors.grey[100],
          },
        },
        tooltip: {
          container: {
            color: colors.primary[500],
          },
        },
      }}
      colors={isDashboard ? { datum: "color" } : { scheme: "nivo" }} // added
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=" >-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        orient: "bottom",
        tickSize: 0,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "transportation", // added
        legendOffset: 36,
        legendPosition: "middle",
      }}
      axisLeft={{
        orient: "left",
        tickValues: 5, // added
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "count", // added
        legendOffset: -40,
        legendPosition: "middle",
      }}
      enableGridX={false}
      enableGridY={false}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "serieColor" }}
      pointLabelYOffset={-12}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 100,
          translateY: 0,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemWidth: 80,
          itemHeight: 20,
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0, 0, 0, .5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0, 0, 0, .03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;