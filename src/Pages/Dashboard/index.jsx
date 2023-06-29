import CardItem from "../../components/CardItem";
import ContainerWrapper from "../../components/ContainerWrapper"
import ProfileIcon from "../../components/icons/ProfileIcon"
import MapsIcon from "../../components/icons/MapsIcon"
import CpuIcon from "../../components/icons/CpuIcon"
import BuildingIcon from "../../components/icons/BuildingIcon"

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
      <div className="w-full mt-5 min-h-full bg-red-200 lg:grid lg:gap-3 lg:gap-4 lg:grid-cols-4 place-content-start">
        <div className="bg-green-200 min-h-max col-start-1 col-end-4">
          <h3>card</h3>
        </div>
        <div className="bg-green-200 min-h-full">

        </div>
      </div>
    </ContainerWrapper>
  );
}

export default Dashboard;