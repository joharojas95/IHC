import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import "./lregistro.css"

const Registro = ({ children }) => (
  <StaticQuery
    query={null}
    render={data => (
      <>
        
          <main>{children}</main>
        
      </>
    )}
  />
)

Registro.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Registro
