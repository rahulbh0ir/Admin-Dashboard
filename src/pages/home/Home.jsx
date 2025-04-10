import Chartbox from "../../components/chartbox/Chartbox"
import Topbox from "../../components/topbox/Topbox"
import "./home.scss"

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="box box1">
          <Topbox />
        </div>
        <div className="box box2"><Chartbox /></div>
        <div className="box box3"><Chartbox /></div>
        <div className="box box4">Box 4</div>
        <div className="box box5"><Chartbox /></div>
        <div className="box box6"><Chartbox /></div>
        <div className="box box7">Box 7</div>
        <div className="box box8">Box 8</div>
        <div className="box box9">Box 9</div>
      </div>
    </>
  )
}

export default Home
