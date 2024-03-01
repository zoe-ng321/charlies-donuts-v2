import React from "react"
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'
import json from '../content/contact.json'
import Button from 'react-bootstrap/Button'
import {BsChevronRight} from 'react-icons/bs'
import Img from "gatsby-image"
import { GoogleMap, LoadScript, Marker, InfoBox } from '@react-google-maps/api';

export default function Contact({data}) {

  const containerStyle = {
    width: '100%'
  };

  const center = {
    lat: 28.8068871,
    lng: -96.9891038
  };

  var map=(
    <div
      style={{ height: 350,
      width: '100%',
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'center',
      padding: 0 }}>
      <LoadScript
          googleMapsApiKey={process.env.GATSBY_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={17}>
            <InfoBox position={center}>
              <div style={{ backgroundColor: 'lightgrey', padding: 10 }}>
                <div style={{ fontSize: 14, color: 'black' }}>
                  Charlie's Donuts
                </div>
              </div>
            </InfoBox>
            <Marker position={center}/>
            </GoogleMap>
        </LoadScript>
      </div>
  );
  
  return (
    <div>
      <NavBar/>
      <div className="container">
        <h1>{json.title}</h1>
        <div style={{alignItems:'center'}}>
        {map}
        </div>
        <div style={{marginTop: '1rem', fontSize: '18px'}}>
          <p>{json.content[0].item}<br/><a href="https://www.google.com/maps/dir//Charlie's+Donuts,+1406B+E+Rio+Grande+St,+Victoria,+TX+77901/@28.8068871,-96.9891038,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x864266c3348d575d:0xd250a4e6a586dc63!2m2!1d-96.9891038!2d28.8068871!3e0" target="_blank" rel="noopener noreferrer"><b>Get Directions</b></a></p>
          <p>{json.content[1].item}</p>
          <p>{json.content[2].item}</p>
          <p>{json.content[3].item}</p>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
