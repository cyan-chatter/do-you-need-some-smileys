import { path } from 'd3';
import Eye from './Eyes/Eye'
import Eyeball from './Eyes/Eyeball'
import Mouth from './Mouth/Mouth'

const d3 = require('d3');
const Smiling = ({size}) => {

  const face = {
    cx : null,
    cy : null,
    strokeWidth : 2,
    r : null
  }
  const width = size;
  const height = width/1.45455;

  const margin = height/6;
  const marginBottom = height/5;  
  
  const centerX = width/2;
  const centerY = height/2;
  face.strokeWidth = width/480;
  face.r = centerY - margin - face.strokeWidth/2
  
  const beardAngleOffsetX = face.strokeWidth*2;
  const beardStrokeWidth = face.strokeWidth*2;

  const hair = [
    [-face.r,-face.r/10],
    [-face.r*0.85 , -face.r * 1.2],
    [-face.r*0.7,-face.r*1.1],
    [-face.r*0.4,-face.r*1.3],
    [-face.r*0.34,-face.r*1.13],
    [-face.r*0.04,-face.r*1.34],
    [face.r*0.03,-face.r*1.15],
    [face.r*0.33,-face.r*1.3],
    [face.r*0.4,-face.r*1.15],
    [face.r*0.7,-face.r*1.3],
    [face.r*0.75,-face.r*1.05],
    [face.r*0.95,-face.r*1.11],
    [face.r*0.98,-face.r*0.9],
    [face.r*1.2,-face.r*1.1],
    [face.r,0],
    [-face.r,-face.r/10]
  ]
  ////


  const eyeballRadius = face.r/10;
  const mouthWidth = face.strokeWidth*4;
  const mouthRadius = height/8 *1.5;

  const eyeOffsetX = face.r/3;
  const eyeOffsetY = face.r/2;
  const eyeRadiusX = face.r/5;
  const eyeRadiusY = face.r/4;
  
  
  const eyeL = {
    cx : null,
    cy : null,
    strokeWidth : face.strokeWidth*2,
    rx : eyeRadiusX,
    ry : eyeRadiusY
  }

  const eyeR = {
    cx : null,
    cy : null,
    strokeWidth : face.strokeWidth*2,
    rx : eyeRadiusX,
    ry : eyeRadiusY
  }

  const eyeBL = {
    cx : null,
    cy: null,
    strokeWidth : face.strokeWidth*2,
    r : eyeballRadius
  }

  const eyeBR = {
    cx : null,
    cy: null,
    strokeWidth : face.strokeWidth*2,
    r : eyeballRadius
  }


  eyeL.cx = - eyeOffsetX
  eyeR.cx = + eyeOffsetX
  eyeL.cy = eyeR.cy = - eyeOffsetY
  eyeBL.cx =  - eyeOffsetX 
  eyeBR.cx =  + eyeOffsetX 
  eyeBL.cy = eyeBR.cy =  - eyeOffsetY + eyeballRadius


  ///


  return (
    <>
    <svg width={width} height={height + marginBottom} className="drawing">
    <g transform={`translate(${centerX},${centerY})`}>
    <polyline
        id = "hair"
        points = {hair}
        stroke = "black"
        strokeWidth = "1"
        fill = "black"
      />
      <circle 
          id="face"
          r = {face.r}
          cx = "0" 
          cy = "0"
          fill="yellow"
          stroke="black"
          strokeWidth= {face.strokeWidth}
      />
      
      <Eye
          id="eyeL"
          rx= {eyeL.rx}
          ry= {eyeL.ry}
          cx = {eyeL.cx}
          cy= {eyeL.cy}
          fill="white"
          stroke="black"
          strokeWidth={eyeL.strokeWidth}
      />
      <Eye
          id="eyeR"
          rx= {eyeR.rx}
          ry= {eyeR.ry}
          cx = {eyeR.cx}
          cy= {eyeR.cy}
          fill="white"
          stroke="black"
          strokeWidth={eyeR.strokeWidth}
      />
      <Eyeball
          id="eyeBL"
          cx = {eyeBL.cx}
          cy = {eyeBL.cy}
          r = {eyeBL.r}
      />
      <Eyeball
          id="eyeBR"
          cx = {eyeBR.cx}
          cy = {eyeBR.cy}
          r = {eyeBR.r}
      />
      
      <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth}/>



      <path 
        d={`M${-face.r/4 -beardAngleOffsetX},${face.r*0.97} 
        Q ${-face.r/60},${face.r*285/219} ${face.r/4-beardAngleOffsetX * 1.2},${face.r*0.97}
        L${face.r/4 -face.r/44 -beardAngleOffsetX},${face.r*0.94}
        C ${face.r/60},${face.r*217/219} ${-face.r/60},${face.r*210/219} ${-face.r/4 +face.r/44 + beardAngleOffsetX/2},${face.r*0.93}
        L${-face.r/4-beardAngleOffsetX},${face.r*0.97}
        `}
        stroke="black"
        strokeWidth = {beardStrokeWidth}
        fill="black" 
      />
    </g>
    </svg>
    </>
  )
}

export default Smiling