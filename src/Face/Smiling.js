import Eye from './Eyes/Eye'
import Eyeball from './Eyes/Eyeball'
import Mouth from './Mouth/Mouth'
import React, {useState, useRef} from 'react'

const Smiling = ({size}) => {

  const face = {
    cx : null,
    cy : null,
    strokeWidth : 2,
    r : null
  }
  var width = 1;
  var height = 1;
  if(size){
    width = size;  
    height = width/1.45455;
  }
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
  
  const eyeballRadius = face.r/10;
  const mouthWidth = face.strokeWidth*4;
  const mouthRadius = height/8 *1.5;

  const eyeOffsetX = face.r/3;
  const eyeOffsetY = face.r/2;
  const eyeRadiusX = face.r/5;
  const eyeRadiusY = face.r/4;
  
  
  const eyeL = {
    cx : - eyeOffsetX,
    cy : - eyeOffsetY,
    strokeWidth : face.strokeWidth*2,
    rx : eyeRadiusX,
    ry : eyeRadiusY
  }

  const eyeR = {
    cx : + eyeOffsetX,
    cy : - eyeOffsetY,
    strokeWidth : face.strokeWidth*2,
    rx : eyeRadiusX,
    ry : eyeRadiusY
  }

  const eyeBL = {
    cx : - eyeOffsetX ,
    cy: - eyeOffsetY + eyeballRadius,
    strokeWidth : face.strokeWidth*2,
    r : eyeballRadius
  }

  const eyeBR = {
    cx : + eyeOffsetX,
    cy: - eyeOffsetY + eyeballRadius,
    strokeWidth : face.strokeWidth*2,
    r : eyeballRadius
  }

  const [LEpos,setLEpos] = useState({x : eyeL.cx, y: eyeL.cy})
  const [REpos,setREpos] = useState({x : eyeR.cx, y: eyeR.cy})

  const [LEB,setLEyeball] = useState({x: eyeBL.cx , y : eyeBL.cy})
  const [REB,setREyeball] = useState({x: eyeBR.cx , y : eyeBR.cy})

  const setpos = (c) => {
    if(c.f === 0)  setLEpos({x : c.x, y: c.y})
    else if(c.f === 1) setREpos({x : c.x, y: c.y})
  }

  const handleMouseMove = (event) => {
    const clx = event.clientX
    const cly = event.clientY

    // const pL = {
    //   x : null,
    //   y : null
    // }

    // const pR = {
    //   x : null,
    //   y : null
    // }
    
    // const dxL = clx - LEB.x
    // const dyL = cly - LEB.y
    
    // //Left x
    // if(dxL < 0){
    //   setLEyeball({...LEB, x : LEpos.x - eyeL.rx })  
    // }
    // else if(dxL > 0){
    //   setLEyeball({...LEB, x : LEpos.x + eyeL.rx })
    // }
    // else{
    //   setLEyeball({...LEB, x : LEpos.x})
    // }

    // //Left y
    // if(dyL < 0){
    //   setLEyeball({...LEB, y : LEpos.y - eyeL.ry })  
    // }
    // else if(dyL > 0){
    //   setLEyeball({...LEB, y : LEpos.y + eyeL.ry })
    // }
    // else{
    //   setLEyeball({...LEB, y : LEpos.y})
    // }
    
    // const dxR = clx - REpos.x
    // const dyR = cly - REpos.y

    // //Right x
    // if(dxR < 0){
    //   setREyeball({...REB, x : REpos.x - eyeR.rx })  
    // }
    // else if(dxR > 0){
    //   setREyeball({...REB, x : REpos.x + eyeR.rx })
    // }
    // else{
    //   setREyeball({...REB, x : REpos.x})
    // }

    // //Right y
    // if(dyR < 0){
    //   setREyeball({...REB, y : REpos.y - eyeR.ry })  
    // }
    // else if(dyR > 0){
    //   setREyeball({...REB, y : REpos.y + eyeR.ry })
    // }
    // else{
    //   setREyeball({...REB, y : REpos.y})
    // }
    

    ///////////////////
    
    var phiL, phiR, pL, pR;
    
    const rL = (eyeL.rx + eyeL.ry)/4
    const rR = (eyeR.rx + eyeR.ry)/4

    if(cly >= LEpos.y){
      console.log("b runs")
      phiL = Math.atan((clx - LEpos.x)/(cly - LEpos.y))
      phiR = Math.atan((clx - REpos.x)/(cly - REpos.y))
      pL = {
        x : (rL * Math.sin(phiL) + eyeL.cx),
        y : (rL * Math.cos(phiL) + eyeL.cy)
      }
      pR = {
        x : (rR * Math.sin(phiR) + eyeR.cx),
        y : (rR * Math.cos(phiR) + eyeR.cy)
      }
    }
    else{
      console.log("a runs")
      phiL = Math.atan((clx - LEpos.x)/(LEpos.y - cly))
      phiR = Math.atan((clx - REpos.x)/(REpos.y - cly))
      pL = {
        x : (rL * Math.sin(phiL) + eyeL.cx),
        y : (-rL * Math.cos(phiL) + eyeL.cy)
      }
      pR = {
        x : (rR * Math.sin(phiR) + eyeR.cx),
        y : (-rR * Math.cos(phiR) + eyeR.cy)
      }
    }

    setLEyeball({x : pL.x, y: pL.y})    
    setREyeball({x : pR.x, y: pR.y})

    /////////////////

    // var x = event.clientX * 100 / window.innerWidth 
    // var y = event.clientY * 100 / window.innerHeight 

    // setEyeMoveX(x)
    // setEyeMoveY(y)
  }

  React.useEffect(()=>{
    window.addEventListener('mousemove',handleMouseMove)
    return ()=>{
      window.removeEventListener('mousemove', handleMouseMove);
    }
  })

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
          setpos={setpos}
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
          setpos={setpos}
      />
      <Eyeball
          id="eyeBL"
          cx = {LEB.x}
          cy = {LEB.y}
          r = {eyeBL.r}
          
      />
      <Eyeball
          id="eyeBR"
          cx = {REB.x}
          cy = {REB.y}
          r = {eyeBR.r}
          
      />
      
      <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth}/>

      <path 
        d={`
        M${-face.r/4 -beardAngleOffsetX},${face.r*0.97} 
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