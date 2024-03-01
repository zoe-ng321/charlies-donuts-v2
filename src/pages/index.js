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
import Img from "gatsby-image"
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
  var v1=(
    <div>
      <NavBar/>
      
      <div className="container">
        {alertCode}
        <div style={{marginTop: '28px', marginBottom: '30px', textAlign: 'center'}}>
          <h3>{json.content[4].item}</h3>
          <h3>{json.content[5].item}</h3>
        </div>
        <Row>
          <Col lg={6} style={{marginBottom: '10px'}}>
            <Img
              fluid={data.iced.childImageSharp.fluid}
              alt="Chocolate iced donuts"
              className="image"
            />
          </Col>
          <Col lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px'}}>
            <Link  to="/menu" style={linkStyles}><Button style={{backgroundColor:'LIGHTSTEELBLUE', borderColor:'LIGHTSTEELBLUE', }}>{json.content[2].item}<BsChevronRight/></Button></Link>
          </Col>
        </Row>
      </div>
      <Footer/>
    </div>
  );

  var v2=(
    <div>
      <NavBar/>
      
      <div className="container">
        {alertCode}
        <div style={{marginTop: '3rem', marginBottom: '3rem', textAlign: 'center'}}>
          <h3>{json.content[4].item}</h3>
          <h3>{json.content[5].item}</h3>
        </div>
        <Row>
          <Col lg={6} style={{marginBottom: '2rem'}}>
            <Img
              fluid={data.iced.childImageSharp.fluid}
              alt="Chocolate iced donuts"
              className="image"
            />
          </Col>
          <Col lg={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem'}}>
            <Button style={{backgroundColor:'LIGHTSTEELBLUE', borderColor:'LIGHTSTEELBLUE', }}><Link  to="/menu" style={linkStyles}>{json.content[2].item}<BsChevronRight/></Link></Button>
          </Col>
        </Row>
      </div>
      <Footer/>
    </div>
  );
  return (
    <div>
      <Helmet>
        <title>Charlie's Donuts</title>
      </Helmet>
      {v2}
    </div>
  );
}

export const query = graphql`
  query MyQuery {
    donut:file(relativePath: { eq: "image1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    iced:file(relativePath: { eq: "IMG_8735.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    glazed:file(relativePath: { eq: "IMG_8733_copy.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
