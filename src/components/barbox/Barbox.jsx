import "./barbox.scss"
import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'


const Barbox = (props) => {
  return (
    <div className='barbox'>
      <h1>{props.title}</h1>
      <div className="barchart">
        <ResponsiveContainer width="99%" height={150} >
          <BarChart data={props.chartData}>
            <Bar dataKey={props.dataKey} fill={props.color} />
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "5px" }}
              labelStyle={{display: "none"}}
              cursor={{fill: "none"}}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Barbox
