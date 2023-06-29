import { Chart } from "react-google-charts";

function LineChart() {
  const data = [
    ["x", "clientes"],
    [0, 22],
    [1, 25],
    [2, 35],
    [3, 72],
    [4, 86],
    [5, 90],
    [6, 76],
    [7, 82],
  ];

  const options = {
    hAxis: {
      title: "Dia",
    },
    vAxis: {
      title: "Nº clientes",
    },
  };

  return (
    <div className="z-10 p-5 shadow-md rounded">
      <h4 className="mt-5">Entrada de clientes - Julho</h4>
      <Chart
        style={{ zIndex: 10 }}
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </div>
  );
}

export default LineChart