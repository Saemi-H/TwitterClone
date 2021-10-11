import React from "react";
import styled, { withTheme } from "styled-components/macro";

import { CardContent, Card as MuiCard, Typography } from "@material-ui/core";
import { spacing } from "@material-ui/system";

import { Line } from "react-chartjs-2";

const Card = styled(MuiCard)(spacing);

const Spacer = styled.div(spacing);

const ChartWrapper = styled.div`
  height: 300px;
`;

function LineChart({ theme }) {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Sales ($)",
        fill: true,
        backgroundColor: "transparent",
        borderColor: theme.palette.secondary.main,
        data: [
          2115,
          1562,
          1584,
          1892,
          1487,
          2223,
          2966,
          2448,
          2905,
          3838,
          2917,
          3327,
        ],
      },

    ],
  };

  const options = {
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      intersect: false,
    },
    hover: {
      intersect: true,
    },
    plugins: {
      filler: {
        propagate: false,
      },
    },
    scales: {
      xAxes: [
        {
          reverse: true,
          gridLines: {
            color: "rgba(0,0,0,0.05)",
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            stepSize: 500,
          },
          display: true,
          borderDash: [5, 5],
          gridLines: {
            color: "rgba(0,0,0,0)",
            fontColor: "#fff",
          },
        },
      ],
    },
  };

  return (
    <Card mb={1}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Line Chart
        </Typography>
        <Typography variant="body2" gutterBottom>
          A line chart is a way of plotting data points on a line.
        </Typography>

        <Spacer mb={6} />

        <ChartWrapper>
          <Line data={data} options={options} />
        </ChartWrapper>
      </CardContent>
    </Card>
  );
}

export default withTheme(LineChart);
