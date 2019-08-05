import React from "react"
import { Link } from "gatsby"
import logo from "../images/UCV.png"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Form, Button, Nav,Navbar, NavDropdown } from "react-bootstrap"


const SecondPage = () => (
  <Layout>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          {' Universidad Central de Venezuela'}
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          
        </Nav>
        <Nav >
        <Nav.Link>  No tienes cuenta?  </Nav.Link>
          <Nav.Link href="/registro/">REGÍSTRATE</Nav.Link>
          
    </Nav>
      </Navbar.Collapse>
    </Navbar>


    <div class="row">
    <div class="col-md-4"></div>
      <div class="col-md-6">
      
        <div id="formregistro">
        <center>
          <p>¡Ingresa ya!</p>
          <div id="circulo"> 
            <svg width="54" height="52" viewBox="0 0 54 52" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.75 15.1688C42.75 23.543 35.6985 30.3355 27 30.3355C18.3015 30.3355 11.25 23.543 11.25 15.1688C11.25 6.79033 18.3015 0 27 0C35.6985 0 42.75 6.79033 42.75 15.1688ZM39.1545 30.7255C35.766 33.189 31.563 34.6688 27 34.6688C22.4325 34.6688 18.2272 33.1847 14.8342 30.7212C5.67225 34.606 0 46.7025 0 52H54C54 46.7502 48.15 34.6537 39.1545 30.7255Z" fill="url(#paint0_linear)"/>
            <defs>
            <linearGradient id="paint0_linear" x1="27" y1="0" x2="27" y2="52" gradientUnits="userSpaceOnUse">
            <stop stop-color="#8A6BCA"/>
            <stop offset="0.9997" stop-color="#8A6BCA" stop-opacity="0.896354"/>
            <stop offset="0.9998" stop-color="#8A6BCA" stop-opacity="0.888619"/>
            <stop offset="0.9999" stop-color="#8A6BCA" stop-opacity="0.934043"/>
            <stop offset="1" stop-color="#8A6BCA" stop-opacity="0.86"/>
            </linearGradient>
            </defs>
            </svg>
          </div>
        </center>
          <Form action="/login/" method="post">
            
            <Form.Group controlId="formBasicEmail">
              <center><Form.Control id="campo" type="number" name="cedula" placeholder="Ingresa tu cédula" required="true"/></center>
            </Form.Group>
            <Form.Group controlId="formBasicPass">
              <center><Form.Control id="campo2" type="password" name="pass" placeholder="Ingresa tu contraseña" required="true"/></center>
            </Form.Group>

            <Button id="siguiente" type="submit">
              Iniciar sesion
            </Button>
          </Form>
          <p1>¿No tienes cuenta? <p2><a href="/registro/">REGÍSTRATE</a></p2></p1>
        </div>
        
      </div>
    </div>

    
  </Layout>
)

export default SecondPage
