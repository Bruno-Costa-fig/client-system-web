import CardItem from "../../components/CardItem";
import ContainerWrapper from "../../components/ContainerWrapper"
import ProfileIcon from "../../components/icons/ProfileIcon"
import MapsIcon from "../../components/icons/MapsIcon"
import CpuIcon from "../../components/icons/CpuIcon"
import BuildingIcon from "../../components/icons/BuildingIcon"
import RankingCidades from "../../components/RankingCidades";
import LineChart from "../../components/LineChart";

function Dashboard() {
  return ( 
    <ContainerWrapper className="">
      <div className="w-full min-h-full lg:grid lg:gap-3 lg:gap-4 lg:grid-cols-4 place-content-start">
        <CardItem type="up" value="+12mil" percentage={10} text="Total de clientes">
          <ProfileIcon size={28} />
        </CardItem>
        <CardItem type="equal" value="106" percentage={10} text="Total de clientes">
          <MapsIcon size={28} />
        </CardItem>
        <CardItem type="up" value="+13mil" percentage={10} text="Total de clientes">
          <CpuIcon size={28} />
        </CardItem>
        <CardItem type="down" value="134" percentage={10} text="Total de lojas parceiras">
          <BuildingIcon size={28} />
        </CardItem>
      </div>
      <div className="w-full mt-5 min-h-full lg:grid lg:gap-3 lg:gap-4 lg:grid-cols-4 place-items-stretch">
        <div className="h-full col-start-1 col-end-4">
          <LineChart />
        </div>
        <div className="min-h-full">
          <RankingCidades />
        </div>
      </div>
    </ContainerWrapper>
  );
}

export default Dashboard;