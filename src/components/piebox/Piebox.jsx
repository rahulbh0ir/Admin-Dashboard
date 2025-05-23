import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";
import "./piebox.scss"



const data = [
  { name: 'Mobile', value: 400, color: "#0088FE" },
  { name: 'Desktop', value: 300, color: "#00C49F" },
  { name: 'Laptop', value: 300, color: "#FFBB28" },
  { name: 'Tablet', value: 200, color: "#FF8042" },
];

const Piebox = () => {
  return (
    <div className='piebox'>
      <h1>Leads by Source</h1>
      <div className="piechart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip 
              contentStyle={{background: "white", borderRadius : "5px"}}
            />
            <Pie
              data={data}
              innerRadius="70%"
              outerRadius="90%"
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map(item => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{background: item.color}} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Piebox
