import React from "react"
import ReactDOM from "react-dom/client"
import one from "./assets/d1.jpg"
import two from "./assets/d2.jpg"
import three from "./assets/d3.jpg"
import four from "./assets/d4.jpg"
import five from "./assets/d7.jpg"
import six from "./assets/d8.jpg"
import seven from "./assets/d2.jpg"
import eight from "./assets/d1.jpg"

import "./index.css"
const root = ReactDOM.createRoot(document.getElementById("root"))


function Full(){
  return(
<div className="full">
           {
      arr.map(function(elements){
       return <Photo name={elements.name} img={elements.img}></Photo>
      })
    }
 
         </div>
  )
         
}

function Photo(props) {
 
  return(
   
    <div className="total">

    

    <div className="cointainer">
    <img src={props.img} alt="none" className="image"></img>
    <h3 className="name">{props.name}</h3>
  </div>
  </div>
    
   
  )

}

var arr=[
  {
    name:"Dog1",
    img:one
  },
  {
    name:"Dog2",
    img:two
  },
  {
    name:"Dog3",
    img:three
  },
  {
    name:"Dog4",
    img:four
  },
  {
    name:"Dog5",
    img:five
  },
  {
    name:"Dog6",
    img:six
  },
  {
    name:"Dog7",
    img:seven
  },
  {
    name:"Dog8",
    img:eight
  }
]




root.render(
 
    <div>
      <h1 className="logo">IMAGE GALLERY</h1>
 <Full></Full>
 </div>
  

)