import React from "react"
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from 'gatsby'

export default function Gallery({data}) {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <h1>Gallery</h1>
        <Row>
          <Col lg={6} className="galleryCol">
            <GatsbyImage
              image={data.glazed.childImageSharp.gatsbyImageData}
              alt="Glazed donuts"
              className="image" />
          </Col>
          <Col lg={6} className="galleryCol">
            <GatsbyImage
              image={data.chocolate.childImageSharp.gatsbyImageData}
              alt="Chocolate iced donuts"
              className="image" />
          </Col>
          <Col lg={6} className="galleryCol">
            <GatsbyImage
              image={data.donutholes.childImageSharp.gatsbyImageData}
              alt="Tray of donut holes"
              className="image" />
          </Col>
          <Col lg={6} className="galleryCol">
            <GatsbyImage
              image={data.kolaches.childImageSharp.gatsbyImageData}
              alt="Tray of sausage kolaches"
              className="image" />
          </Col>
          <Col lg={6} className="galleryCol">
            <GatsbyImage
              image={data.iced.childImageSharp.gatsbyImageData}
              alt="Variety of iced donuts"
              className="image" />
          </Col>
          <Col lg={6} className="galleryCol">
            <GatsbyImage
              image={data.strawberry.childImageSharp.gatsbyImageData}
              alt="Strawberry iced donuts"
              className="image" />
          </Col>
        </Row>
      </div>
      <Footer/>
    </div>
  );
}

export const query = graphql`query MyQueryGallery {
  strawberry: file(relativePath: {eq: "IMG_8726.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  iced: file(relativePath: {eq: "IMG_8727.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  donutholes: file(relativePath: {eq: "IMG_8737.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  kolaches: file(relativePath: {eq: "IMG_8739.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  chocolate: file(relativePath: {eq: "IMG_8735.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  glazed: file(relativePath: {eq: "IMG_8728.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}`
