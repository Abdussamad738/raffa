import { useTheme } from "@mui/material";
import { ResponsiveBar } from "@nivo/bar";
import { tokens } from "../../theme";
// import { mockBarData as data } from "../data/mockData";

function BarChart  ({ isDashboard = false })  {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const data =  [
    {
      month: "Jan",
      "cricket": 137,
      "cricketColor": "hsl(229, 70%, 50%)",
      football: 96,
      footballColor: "hsl(296, 70%, 50%)",
      games: 72,
      gamesColor: "hsl(97, 70%, 50%)",
      racket: 140,
      racketColor: "hsl(340, 70%, 50%)",
    },
    {
      month: "Feb",
      "cricket": 55,
      "cricketColor": "hsl(307, 70%, 50%)",
      football: 28,
      footballColor: "hsl(111, 70%, 50%)",
      games: 58,
      gamesColor: "hsl(273, 70%, 50%)",
      racket: 29,
      racketColor: "hsl(275, 70%, 50%)",
    },
    {
      month: "Mar",
      "cricket": 109,
      "cricketColor": "hsl(72, 70%, 50%)",
      football: 23,
      footballColor: "hsl(96, 70%, 50%)",
      games: 34,
      gamesColor: "hsl(106, 70%, 50%)",
      racket: 152,
      racketColor: "hsl(256, 70%, 50%)",
    },
    {
      month: "Apr",
      "cricket": 133,
      "cricketColor": "hsl(257, 70%, 50%)",
      football: 52,
      footballColor: "hsl(326, 70%, 50%)",
      games: 43,
      gamesColor: "hsl(110, 70%, 50%)",
      racket: 83,
      racketColor: "hsl(9, 70%, 50%)",
    },
    {
      month: "May",
      "cricket": 81,
      "cricketColor": "hsl(190, 70%, 50%)",
      football: 80,
      footballColor: "hsl(325, 70%, 50%)",
      games: 112,
      gamesColor: "hsl(54, 70%, 50%)",
      racket: 35,
      racketColor: "hsl(285, 70%, 50%)",
    },
    {
      month: "Jun",
      "cricket": 66,
      "cricketColor": "hsl(208, 70%, 50%)",
      football: 111,
      footballColor: "hsl(334, 70%, 50%)",
      games: 167,
      gamesColor: "hsl(182, 70%, 50%)",
      racket: 18,
      racketColor: "hsl(76, 70%, 50%)",
    },
    {
      month: "Jul",
      "cricket": 80,
      "cricketColor": "hsl(87, 70%, 50%)",
      football: 47,
      footballColor: "hsl(141, 70%, 50%)",
      games: 158,
      gamesColor: "hsl(224, 70%, 50%)",
      racket: 49,
      racketColor: "hsl(274, 70%, 50%)",
    },
  ];

  return (
    <ResponsiveBar
      data={data}
      theme={{
        // added
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
      }}
      keys={["cricket", "football", "games", "activewear", "racket", "fitness"]}
      indexBy="month"
      margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
      padding={0.3}
      valueScale={{ type: "linear" }}
      indexScale={{ type: "band", round: true }}
      colors={{ scheme: "nivo" }}
      defs={[
        {
          id: "dots",
          type: "patternDots",
          background: "inherit",
          color: "#38bcb2",
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: "lines",
          type: "patternLines",
          background: "inherit",
          color: "#eed312",
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      borderColor={{
        from: "color",
        modifiers: [["darker", "1.6"]],
      }}
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "month", // changed
        legendPosition: "middle",
        legendOffset: 32,
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashboard ? undefined : "category", // changed
        legendPosition: "middle",
        legendOffset: -40,
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.6]],
      }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 120,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [
            {
              on: "hover",
              style: {
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
      role="application"
      barAriaLabel={function (e) {
        return e.id + ": " + e.formattedValue + " in month: " + e.indexValue;
      }}
    />
  );
};

export default BarChart;