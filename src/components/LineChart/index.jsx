import { Chart } from "react-google-charts";

function LineChart({dashboardOverview}) {
  const data = () => {
    if(!!dashboardOverview && !!dashboardOverview.sales){
      return [
        ["x", "clientes"],
        ...dashboardOverview.sales
      ];
    } else {
      return [
        ["x", "clientes"],
        [0, 1]
      ]
    }
  } 

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
      <h4 className="mt-5 md:ms-10">Entrada de clientes - Junho</h4>
      <Chart
        style={{ zIndex: 10 }}
        chartType="LineChart"
        width="100%"
        height="400px"
        data={data()}
        options={options}
      />
    </div>
  );
}

export default LineChart