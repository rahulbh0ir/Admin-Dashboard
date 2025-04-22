import { Tooltip } from "@mui/material";
import "./single.scss";
import { Legend, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

const Single = (props) => {

  return (
    <div className='single'>
      <div className="view">
        <div className="info">
          <div className="topInfo">
            <img src={props.single.img} alt="" />
            <h1>{props.single.title}</h1>
          </div>
          <button>Update</button>
          <div className="details">

            {Object.entries(props.single.info).map(item => (

              <div className="item" key={item[0]}>
                <span className="itemTitle">{item[0]} : </span>
                <span className="itemValue">{item[1]}</span>
              </div>

            ))
            }


          </div>
        </div>

        <hr />
        {props.single.chart &&
          <div className="chart">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={props.single.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                {/* <Tooltip /> */}
                <Legend />
                {props.single.chart.dataKeys.map(pie => (
                  <Line
                    key={pie.name}
                    type="monotone"
                    dataKey={pie.name}
                    stroke={pie.color}
                  />
                ))}

              </LineChart>

            </ResponsiveContainer>
          </div>
        }
      </div>
      <div className="activities">
        <h2>Latest Activities</h2>
        {props.single.activities &&
          <ul>
            {props.single.activities.map(pie => (
              <li key={pie.text}>
                <div>
                  <p>{pie.text}</p>
                  <time>{pie.time}</time>
                </div>
              </li>
            ))}

          </ul>
        }
      </div>
    </div>
  )
}

export default Single
