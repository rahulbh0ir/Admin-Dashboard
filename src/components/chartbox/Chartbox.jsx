import { Link } from "react-router-dom"
import "./chartbox.scss"
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts"


const Chartbox = (props) => {
  return (
    <div className="chartbox">
      <div className="boxinfo">
        <div className="title">
          <img src={props.icon} />
          <span>{props.title}</span>
        </div>
        <h1>{props.numbers}</h1>
        <Link to="/">View All</Link>
      </div>
      <div className="chartinfo">
        <div className="chart">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={300} height={100} data={props.chartdata}>
              <Tooltip 
                contentStyle={{background: "transparent", border: "none"}}
                labelStyle={{display : "none"}}
                position={{x : 10 , y : 70 }}
              />
              <Line type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <div className="percentage">{props.percentage}%</div>
          <div className="duration">this month</div>
        </div>
      </div>
    </div>
  )
}

export default Chartbox
