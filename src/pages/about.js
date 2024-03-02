import React from "react"
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import { GatsbyImage } from "gatsby-plugin-image";
import json from '../content/about.json'
import { graphql } from 'gatsby'

export default function About({data}) {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <h1>{json.title}</h1>
        <GatsbyImage
          image={data.shop.childImageSharp.gatsbyImageData}
          alt="Menu sign"
          className="image" />
        <div style={{marginTop: '2rem', fontSize: '18px', marginBottom:'3rem'}}>
          <p>{json.content[0].item}</p>
          <p>{json.content[1].item}</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export const query = graphql`query MyQueryAbout {
  shop: file(relativePath: {eq: "IMG_8734.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}`
