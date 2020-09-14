import React, { ReactNode } from 'react'
import Head from 'next/head'
import ProductPopover from "./NavPopOver/Product";


type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
      <React.Fragment>

          <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark">
              <div className="container">
                  <a className="navbar-brand logo text-uppercase" href="javascript:;">
                      <img src="assets/logo/logo-dark.png" className="logo-light" alt="" height="50"/>
                      <img src="assets/logo/logo-white.png" className="logo-dark" alt="" height="50"/>
                  </a>
                  <button className="navbar-toggler" type="button" data-toggle="collapse"
                          data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false"
                          aria-label="Toggle navigation">
                      <i className="mdi mdi-menu"></i>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarCollapse">
                      <ul className="navbar-nav ml-auto navbar-center" id="mySidenav">
                          <li className="nav-item active">
                              <a href="#home" className="nav-link">Home</a>
                          </li>
                          <li className="nav-item">
                              {/*<a href="#services" className="nav-link">Products</a>*/}
                              <ProductPopover/>
                          </li>
                          <li className="nav-item">
                              <a href="#pricing" className="nav-link">Services</a>
                          </li>
                          <li className="nav-item">
                              <a href="#contact" className="nav-link">Contact</a>
                          </li>
                      </ul>

                      <div className="navbar-button">
                          <a href="#contact" className="btn btn-sm btn-custom btn-round">Coming Soon</a>
                      </div>
                  </div>
              </div>
          </nav>

          {children}
      </React.Fragment>
  </div>
)

export default Layout
