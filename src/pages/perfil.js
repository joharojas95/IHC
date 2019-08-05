import React from "react"
import { Link } from "gatsby"
import logo from "../images/UCV.png"
import Layout from "../components/layout"
import SEO from "../components/seo"
import foto from "../images/perfil.png"
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
          <Nav.Link id="navl" href="/perfil/"><i class="fa fa-user-circle-o"></i> Mi perfil</Nav.Link>
          <Nav.Link id="navl" href="/"><i class="fa fa-globe"></i> Notificaciones</Nav.Link>
          <Nav.Link id="navl" href="/contacto/">   <i class="fa fa-comments"></i> Contacto OBE</Nav.Link>
          <Nav.Link>  |  </Nav.Link>
          <Nav.Link eventKey={2} href="/">
          <div id="word2"><i class="fa fa-power-off"></i> SALIR</div>
        </Nav.Link>
      </Nav>
      </Navbar.Collapse>
    </Navbar>


    <div class="row">
    <div class="col-md-2"></div>
      <div class="col-md-4">
      
        <div id="formperfil">
        <center>
        <img id="fotoperfil" alt="" src={foto} width="200" height="200"/>
        <Button id="actimagen">Actualizar foto</Button>

        <table id="table2">
            <td id="td3">
              <tr>Nombre</tr>
              <tr>Cédula</tr>
              <tr>Fecha de Nac.</tr>
              <tr>Facultad</tr>
              <tr>Escuela</tr>
            </td>
            <td id="td4">
              <tr>María Pereira</tr>
              <tr>1234567</tr>
              <tr>22/02/1995</tr>
              <tr>Ciencias</tr>
              <tr>Computación</tr>
            </td>
          </table>
        </center>
        </div>
        
      </div>
      <div class="col-md-4">
      
        <div id="formperfil">
        <Form action="/perfil/" method="post">
            <Form.Group controlId="formBasicNombre">
            
              <center>
                <Form.Label id="label3">Nombre</Form.Label>
                <Form.Control id="campo4" type="text" placeholder="" required="true"/>
                <Form.Label id="label3">Fecha de nacimiento</Form.Label>
                <Form.Control id="campo4" type="date" placeholder="" required="true"/>
                <Form.Label id="label3">Correo electronico</Form.Label>
                <Form.Control id="campo4" type="email" placeholder="" required="true"/>
                <Form.Label id="label3">Contrasena antigua</Form.Label>
                <Form.Control id="campo4" type="password" placeholder="" required="true"/>
                <Form.Label id="label3">Contrasena nueva</Form.Label>
                <Form.Control id="campo3" type="password" placeholder="Ingresa nueva contrasena" required="true"/>
                <Form.Control id="campo3" type="password" placeholder="Ingresa nuevamente la contrasena" required="true"/>
              </center>
            </Form.Group>
          

            <Button id="siguiente2" type="submit">
              Actualizar datos
            </Button>
          </Form>
        </div>
        
      </div>


    </div>

    
  </Layout>
)

export default SecondPage
