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
        Ya tienes cuenta?
          <Nav.Link href="/registro/">INGRESA</Nav.Link>
          
    </Nav>
      </Navbar.Collapse>
    </Navbar>


    <div class="row">
    <div class="col-md-4"></div>
      <div class="col-md-6">
      
        <div id="formregistro">
        <center>
          <p>Verifica tu información y crea una contraseña  </p>
          <div id="circulo2"> 
            <svg width="60" height="40" viewBox="0 0 74 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.4167 16.1944C15.4167 13.7564 17.4887 11.7778 20.0417 11.7778C22.5947 11.7778 24.6667 13.7564 24.6667 16.1944C24.6667 18.6354 22.5947 20.6111 20.0417 20.6111C17.4887 20.6111 15.4167 18.6354 15.4167 16.1944ZM43.1667 17.6667L35.3998 29.4444L27.75 23.6733L15.4167 41.2222H58.5833L43.1667 17.6667ZM67.8333 5.88889V47.1111H6.16667V5.88889H67.8333ZM74 0H0V53H74V0Z" fill="#8A6BCA"/>
            </svg>

          </div>
          
          </center>
          <Button id="subirimagen">Subir imagen</Button>
          <table>
            <td id="td1">
              <tr>Nombre</tr>
              <tr>Cédula</tr>
              <tr>Fecha de Nac.</tr>
              <tr>Facultad</tr>
              <tr>Escuela</tr>
            </td>
            <td id="td2">
              <tr>María Pereira</tr>
              <tr>1234567</tr>
              <tr>22/02/1995</tr>
              <tr>Ciencias</tr>
              <tr>Computación</tr>
            </td>
          </table>
        
          <Form action="/registro2/" method="post">
            
            <Form.Group controlId="formBasicEmail">
              <center>
                <Form.Label id="label">Correo electronico</Form.Label>
                <Form.Control id="campo2" type="email" placeholder="Ingresa tu correo" required="true"/>
              </center>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <center>
                <Form.Label id="label2">Contrasena</Form.Label>
                <Form.Control id="campo3" type="password" placeholder="Ingresa tu pass" required="true"/>
                <Form.Control id="campo3" type="password" placeholder="Ingresa de nuevo tu pass" required="true"/>
              </center>
            </Form.Group>

            <Button id="siguiente2" type="submit">
              Siguiente
            </Button>
          </Form>
          <p1>¿Ya tienes cuenta? <p2> INGRESA</p2></p1>
        </div>
        
      </div>
    </div>

    
  </Layout>
)

export default SecondPage
