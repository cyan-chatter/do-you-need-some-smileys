import { path } from 'd3';
const d3 = require('d3');

const Mouth = ({mouthRadius,mouthWidth}) =>{
    var mouthArc = d3.arc()
    .innerRadius(mouthRadius - mouthWidth)
    .outerRadius(mouthRadius)
    .startAngle(Math.PI * 1.17)
    .endAngle((Math.PI/2) * 1.1)
    return (
        <path 
            d = {mouthArc()}   
        />
    )
}

export default Mouth