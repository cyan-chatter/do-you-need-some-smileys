import { path } from 'd3';
const d3 = require('d3');

const Eye = ({id,rx,ry,cx,cy,strokeWidth}) =>{
    return (
        <ellipse
          id={id}
          rx= {rx}
          ry= {ry}
          cx = {cx}
          cy= {cy}
          fill="white"
          stroke="black"
          strokeWidth={strokeWidth}
      />
    )
    
}

export default Eye