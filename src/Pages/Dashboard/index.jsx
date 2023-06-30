import CardItem from "../../components/CardItem";
import ContainerWrapper from "../../components/ContainerWrapper"
import ProfileIcon from "../../components/icons/ProfileIcon"
import MapsIcon from "../../components/icons/MapsIcon"
import CpuIcon from "../../components/icons/CpuIcon"
import BuildingIcon from "../../components/icons/BuildingIcon"
import RankingCidades from "../../components/RankingCidades";
import LineChart from "../../components/LineChart";
import useDashboardOverview from "../../hooks/useDashboardOverview";
import { useEffect, useState } from "react";

function Dashboard() {

  const {dashboardOverview, error} = useDashboardOverview()

  const [totalClients, setTotalClients] = useState(null)
  const [totalStores, setTotalStores] = useState(null)
  const [totalSubscriptions, setTotalSubscriptions] = useState(null)
  const [totalPartnerships, setTotalPartnerships] = useState(null)

  useEffect(() => {
    setTotalClients(dashboardOverview.totalClients)
    setTotalStores(dashboardOverview.totalStores)
    setTotalSubscriptions(dashboardOverview.totalSubscriptions)
    setTotalPartnerships(dashboardOverview.totalPartnerships)
  }, [dashboardOverview])

  return ( 
    <ContainerWrapper>
      <div className="w-full min-h-full lg:grid lg:gap-3 lg:gap-4 lg:grid-cols-4 place-content-start">
        {!!totalClients && <CardItem type={totalClients.variation} value={totalClients.amount} percentage={totalClients.percentage} text={totalClients.text}>
          <ProfileIcon size={28} />
        </CardItem>}
        {!!totalStores && <CardItem type={totalStores.variation} value={totalStores.amount} percentage={totalStores.percentage} text={totalStores.text}>
          <MapsIcon size={28} />
        </CardItem>}
        {!!totalSubscriptions && <CardItem type={totalSubscriptions.variation} value={totalSubscriptions.amount} percentage={totalSubscriptions.percentage} text={totalSubscriptions.text}>
          <CpuIcon size={28} />
        </CardItem>}
        {!!totalPartnerships && <CardItem type={totalPartnerships.variation} value={totalPartnerships.amount} percentage={totalPartnerships.percentage} text={totalPartnerships.text}>
          <BuildingIcon size={28} />
        </CardItem>}
      </div>
      <div className="w-full mt-5 min-h-full lg:grid lg:gap-3 lg:gap-4 lg:grid-cols-4 place-items-stretch">
        <div className="h-full col-start-1 col-end-4">
          <LineChart dashboardOverview={dashboardOverview} />
        </div>
        <div className="min-h-full">
          <RankingCidades />
        </div>
      </div>
    </ContainerWrapper>
  );
}

export default Dashboard;