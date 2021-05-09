import React, {useState} from 'react'

const Eye = ({id,rx,ry,cx,cy,strokeWidth,setpos}) =>{
  const [fl,setfl] = useState(1)
  const [fl1,setfl1] = useState(1)
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
          ref={el=>{
            if(!el || fl1 === 0) return
            const rect = el.getBoundingClientRect() 
            console.log("rect", rect)
            const c = {x : rect.x, y : rect.y, f : null}
            if(id==="eyeL") c.f = 0 
            else if(id==="eyeR") c.f = 1
            if(fl===1){
              setpos(c)
              setfl1(0)
              setfl(0)
            } 
          }}
      />
    )
    
}

export default Eye