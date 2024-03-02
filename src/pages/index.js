import React, {useState} from "react"
import Helmet from "react-helmet"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/index.css';
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import { graphql, Link } from "gatsby"
import Alert from 'react-bootstrap/Alert'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { GatsbyImage } from "gatsby-plugin-image";
import json from '../content/home.json'
import {BsChevronRight} from 'react-icons/bs'

export default function Home({ data }) {
  const [show, setShow] = useState(false);
  const linkStyles = {
    color: 'black',
    display: 'inline-block',
    margin: '0 0.5rem',
    padding: '0.25rem',
    textDecoration: 'none',
    fontFamily: 'Poppins',
    fontSize: '30px'
  };

  var alertCode = ''
  if (show) {
      alertCode = (
        <Alert variant="warning" onClose={() => setShow(false)} style={{marginTop:'1rem'}}>
          <p>
          {json.content[3].item} <a href="https://www.cdc.gov/coronavirus/2019-nCoV/index.html">here!</a>
          </p>
        </Alert>
      );
  }
  return (
    <div>
      <Helmet>
        <title>Charlie's Donuts</title>
      </Helmet>
      <div>
        <NavBar/>
        <div style={{ display: "grid" }}>
      <GatsbyImage
        style={{
          gridArea: "1/1",
        }}
        layout="fullWidth"
        aspectratio={3 / 1}
        alt=""
        image={data.glazed.childImageSharp.gatsbyImageData}
        formats={["auto", "webp", "avif"]}
      />
      <div
        style={{
          gridArea: "1/1",
          position: "relative",
          justifyContent: "center",
          alignItems: "start",
          display: "flex",
          flexDirection: "column",
          marginLeft: "50px"
        }}
      >
        <div className="herotitle">{json.content[0].item}</div>
        <div className="herotext">{json.content[1].item}</div>
      </div>
    </div>
        <div className="container">
          {alertCode}
          <div style={{marginTop: '3rem', marginBottom: '3rem', textAlign: 'center'}}>
            <h3>{json.content[4].item}</h3>
            <h3>{json.content[5].item}</h3>
          </div>
          <Row>
            <Col lg={6} style={{marginBottom: '2rem'}}>
              <GatsbyImage
                image={data.iced.childImageSharp.gatsbyImageData}
                alt="Chocolate iced donuts"
                className="image" />
            </Col>
            <Col lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem'}}>
              <Button style={{backgroundColor:'LIGHTSTEELBLUE', borderColor:'LIGHTSTEELBLUE', }}><Link  to="/menu" style={linkStyles}>{json.content[2].item}<BsChevronRight/></Link></Button>
            </Col>
          </Row>
        </div>
        <Footer/>
      </div>
    </div>
  );
}

export const query = graphql`query MyQuery {
  donut: file(relativePath: {eq: "image1.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  iced: file(relativePath: {eq: "IMG_8735.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
  glazed: file(relativePath: {eq: "IMG_8733copy.jpg"}) {
    childImageSharp {
      gatsbyImageData(layout: FULL_WIDTH)
    }
  }
}`
