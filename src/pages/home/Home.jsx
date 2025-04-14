import Chartbox from "../../components/chartbox/Chartbox";
import Topbox from "../../components/topbox/Topbox";
import "./home.scss";
import { chartBoxUser, chartBoxProduct, chartBoxRevenue, chartBoxConversion, barChartBoxVisit, barChartBoxRevenue } from "../../data"
import Barbox from "../../components/barbox/Barbox";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="box box1">
          <Topbox />
        </div>
        <div className="box box2"><Chartbox {...chartBoxUser}  /></div>
        <div className="box box3"><Chartbox {...chartBoxProduct} /></div>
        <div className="box box4">Box 4</div>
        <div className="box box5"><Chartbox {...chartBoxConversion}/></div>
        <div className="box box6"><Chartbox {...chartBoxRevenue} /></div>
        <div className="box box7">Box 7</div>
        <div className="box box8"><Barbox {...barChartBoxVisit} /></div>
        <div className="box box9"><Barbox {...barChartBoxRevenue} /></div>
      </div>
    </>
  )
}

export default Home
