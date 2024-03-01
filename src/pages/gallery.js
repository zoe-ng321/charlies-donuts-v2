import React from "react"
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Img from "gatsby-image"
import { graphql } from 'gatsby'

export default function Gallery({data}) {
  return (
    <div>
      <NavBar/>
      <div className="container">
        <h1>Gallery</h1>
        <Row>
          <Col lg={6} className="galleryCol">
            <Img
              fluid={data.glazed.childImageSharp.fluid}
              alt="Glazed donuts"
              className="image"
            />
          </Col>
          <Col lg={6} className="galleryCol">
            <Img
              fluid={data.chocolate.childImageSharp.fluid}
              alt="Chocolate iced donuts"
              className="image"
            />
          </Col>
          <Col lg={6} className="galleryCol">
            <Img
              fluid={data.donutholes.childImageSharp.fluid}
              alt="Tray of donut holes"
              className="image"
            />
          </Col>
          <Col lg={6} className="galleryCol">
            <Img
              fluid={data.kolaches.childImageSharp.fluid}
              alt="Tray of sausage kolaches"
              className="image"
            />
          </Col>
          <Col lg={6} className="galleryCol">
            <Img
              fluid={data.iced.childImageSharp.fluid}
              alt="Variety of iced donuts"
              className="image"
            />
          </Col>
          <Col lg={6} className="galleryCol">
            <Img
              fluid={data.strawberry.childImageSharp.fluid}
              alt="Strawberry iced donuts"
              className="image"
            />
          </Col>
        </Row>
      </div>
      <Footer/>
    </div>
  );
}

export const query = graphql`
  query MyQueryGallery {
    strawberry:file(relativePath: { eq: "IMG_8726.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iced:file(relativePath: { eq: "IMG_8727.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    donutholes:file(relativePath: { eq: "IMG_8737.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    kolaches:file(relativePath: { eq: "IMG_8739.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    chocolate:file(relativePath: { eq: "IMG_8735.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    glazed:file(relativePath: { eq: "IMG_8728.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
