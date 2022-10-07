import React from "react";
import { name, city } from "../data/data.js";
// h1 = screen.queryByText(`${name} is a Web Developer from ${city}`)
function Home() {
  // update the JSX being returned!

  return (<div id="home">
    <h1 style={{color: "firebrick"}}>{name} is a Web Developer from {city}</h1>
    
  </div>
  )
}

export default Home;
