import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import logo from "../images/UCV.png"
import OBE from "../images/OBE.png"
import OBE2 from "../images/OBE2.png"
import { Nav,Navbar, NavDropdown } from "react-bootstrap"
import SideNav, { Toggle, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import 'font-awesome/css/font-awesome.min.css';

import "bootstrap/dist/css/bootstrap.css"
// Load Quicksand typeface
require('typeface-quicksand')



const IndexPage = () => (

  
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
      <Nav.Link href="/registro/"><div id="word">REGÍSTRATE</div></Nav.Link>
      <Nav.Link>  `  </Nav.Link>
      <Nav.Link eventKey={2} href="/ingreso/">
        <div id="word2"> INGRESA</div>
      </Nav.Link>
</Nav>
  </Navbar.Collapse>
</Navbar>




    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    
    <div class="row">
      <div class="col-md-1">
        <img id="obe" src={OBE}></img>
      </div>
      <div class="col-md-1">
        <p id="parrafo">Organización para el Bienestar Estudiantil</p>
      </div>
      
      <div class="col-md-10">
        <h1 id="title">OBE siempre al servicio de los estudiantes</h1>
      </div>
    </div>

   
    
    <div class="row">
      <div class="col-md-2">
      <SideNav
    onSelect={(selected) => {
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="index">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                <a href="/">Inicio</a>
            </NavText>
            
        </NavItem>
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-globe" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
            <a href="/">¿Qué es OBE?</a>
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
                <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                Servicios
            </NavText>
            <NavItem eventKey="charts/linechart">
                <NavText>
                    Servicio médico
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    Odontología
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart1">
                <NavText>
                    Psicología
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart2">
                <NavText>
                    Comedor
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart3">
                <NavText>
                    Trabajo social
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart4">
                <NavText>
                    Emprendimiento
                </NavText>
            </NavItem>
            
        </NavItem>
    </SideNav.Nav>
</SideNav>
        
      </div>
      <div class="col-md-9">
        <div id="rectanguloOBE">
            <center><img alt="" src={OBE2}/></center>
            <h1>Organización para el Bienestar Estudiantil</h1>
            <p>La Organización de Bienestar Estudiantil (OBE) es la Dependencia Universitaria, adscrita a la Secretaría de la UCV, responsable de definir, organizar y administrar los Programas y Servicios estudiantiles para la atención de las condiciones socioeconómicas y de salud del estudiante de la Universidad Central de Venezuela.</p>
            <p>
            Fue creada bajo la presidencia del General Isaías Medina Angarita, un 13 de Diciembre de 1943, mediante decreto Nº 279 del Ejecutivo Federal, el cual señala lo siguiente " La Organización de Bienestar Estudiantil de la Universidad Central de Venezuela, dependiente de la administración Federal y adscrita al Ministerio de Educación Nacional, es un Instituto Oficial que gozará de personalidad jurídica autónoma y patrimonio propio, distinto e independiente del Fisco Nacional".
            </p>
            <p>
            Su estructura y funcionamiento estaba dirigida por una Junta Administradora, constituida por el Vicerrector quien ejercía funciones de Presidente, Administrador y representante legal ante el Consejo, el cual estaba conformado por la Junta Administradora y representantes de los ministerios y colegios profesionales de las distintas disciplinas humanísticas y científicas existentes en aquellos momentos, así como un representante de los estudiantes y egresados. El Rector era el encargado de presidir y guiar estas actividades.
            </p>
            <p>
            Hoy día, a sesenta y ocho años de su creación, ha sufrido un conjunto de transformaciones con la incorporación de nuevos programas y la eliminación de otros.
            </p>
            <p>
            La concepción de Bienestar Estudiantil que antes era definida intrauniversitariamente, en la actualidad es emanada de la Comisión Permanente de Directores de Desarrollo Estudiantil del Consejo Nacional de Universidades, con el propósito de manejar todos los programas de las universidades del país, bajo una misma concepción y perspectiva.
            </p>
            <p>
            O.B.E se encuentra adscrita a la Secretaría de la UCV, cargo que ocupa actualmente el Profesor Amalio Belmonte, quien designó en la Dirección de la organización al Profesor Ricardo Ríos, en la Subdirección a la Profesora Sara Vera y en la Dirección Adjunta del Comedor Universitario a la Profesora Judi Chaudari.
            </p>
            <p>
            Este equipo directivo comprometido con aumentar la efectividad de la gestión organizacional, ha diseñado y ejecutado políticas, con el fin de guiar la acción institucional, involucrando las distintas unidades y programas e incluso los usuarios de los mismos, a fin de consolidarla mas allá de la gestión, basandose en la implantación de una cultura organizacional orientada hacia la planificación como proceso administrativo racional que permite conocer el presente para prediseñar el futuro deseado desde una visión integral y participativa.
            </p>
       
        </div>
        
      </div>
    

    </div>

  
  </Layout>
)



export default IndexPage
