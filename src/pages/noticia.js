import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import logo from "../images/UCV.png"
import OBE from "../images/OBE.png"
import { Nav,Navbar, NavDropdown } from "react-bootstrap"
import Card from '../components/Card'
import Card2 from '../components/Card2'
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
      <Nav.Link href="/registro/"><div id="word">REGISTRATE</div></Nav.Link>
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
      <div class="col">
      <div id="rectangle2">Noticia</div>
      </div>
    </div>
    
    <div class="row">
      <div class="col-md-2">
      <SideNav
    onSelect={(selected) => {
      const to = '/' + selected;
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
                <a href="/OBE/"><i className="fa fa-fw fa-globe" style={{ fontSize: '1.75em' }} /></a>
                
            </NavIcon>
            <NavText>
            <a href="/OBE/">¿Qué es OBE?</a>
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
      <div class="col-md-8">
      <Card
          title = ""
          text = "May 23rd, 2018"
          image={require('../images/comedor.jpg')}
        />
      </div>

    

    </div>
    

    <div class="col-md-9">
        <div id="rectanguloNOTICIA">
            <h1>Lorem Ipsum Dolor sit Amet Consectetur Adipiscing Elit</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
           
       
        </div>
        
      </div>
    

  
  </Layout>
)



export default IndexPage
