import React from 'react'
import { Link } from 'react-router-dom'
import { Container,Row } from 'react-bootstrap'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
export default function Layout() {
  return (
    <> 
     <Container fluid className='m-0 p-0'>
      <Header />
      <Container className='m-0 p-0'>
        <Row> 
        <div className="col-md-3 p-0">
        <Sidebar />
        </div>
        <div className="col-md-9">
            <Dashboard />
        </div>

        </Row>
       <Footer />
      </Container>
     </Container>
      
    </>
  )
}
