import React from "react"
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import json from '../content/menu.json'

export default function Menu({data}) {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <h1>{json.title}</h1>
        <h6>{json.content[0].item}</h6><br/>
        <div>
          <strong>{json.content[1].item}<br/></strong>
          <div className="menusubsection">
            {json.content[2].item}<br/>
            {json.content[3].item}<br/>
            {json.content[4].item}<br/>
          </div>
          <div className="menusubsection">
            {json.content[5].item}<br/>
            {json.content[6].item}<br/>
            {json.content[7].item}<br/>
            {json.content[8].item}<br/>
            {json.content[9].item}<br/>
          </div>
          <div className="menusubsection">
            {json.content[10].item}<br/>
            {json.content[11].item}<br/>
          </div>
          <div className="menusubsection">
            {json.content[12].item}<br/>
            {json.content[13].item}<br/>
          </div>
        </div>
        <div>
          <strong>{json.content[14].item}<br/></strong>
          <div className="menusubsection">
            {json.content[15].item}<br/>
            {json.content[16].item}<br/>
            {json.content[17].item}<br/>
            {json.content[18].item}<br/>
          </div>
          <div className="menusubsection">
            {json.content[19].item}<br/>
            {json.content[20].item}<br/>
            {json.content[21].item}<br/>
          </div>
        </div>
        <div>
          <strong>{json.content[22].item}<br/></strong>
          <div className="menusubsection">
            {json.content[23].item}<br/>
            {json.content[24].item}<br/>
            {json.content[25].item}<br/>
            {json.content[26].item}<br/>
            {json.content[27].item}<br/>
            {json.content[28].item}<br/>
            {json.content[29].item}<br/>
            {json.content[30].item}<br/>
            {json.content[31].item}<br/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
