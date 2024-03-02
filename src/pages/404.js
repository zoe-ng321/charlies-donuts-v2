import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/index.css';
import NavBar from '../components/navbar.js'
import Footer from '../components/footer.js'

export default function errorPage({data}) {
    return (
      <div>
        <NavBar/>
        <div className="container">
          <h1>Page not found</h1>
        </div>
        <Footer/>
      </div>
    );
}