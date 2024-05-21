import React from 'react'
import {Container,Row} from 'react-bootstrap'

export default function Header() {
  return (
    <>
        {/* header start here */}
        <Container fluid className='p-0 bg-white shadow'>
            <Row>
             {/* logo section */}
              <div className='col-md-2 p-3 bg-primary text-white'>
                <span className='bi bi-grid-1x2'></span> Company
              </div>
              {/* search box section */}
              <div className='col-md-7 p-3'>
                <div className='input-group w-100'>
                    <input type='text' className='form-control' placeholder='Search for....' required />
                    <label className='input-group-text'>
                        <button type='button' className='btn btn-sm btn-primary'><span className='bi bi-search'></span></button>
                    </label>
                </div>
              </div>
              {/* welcome */}
              <div className='col-md-2 p-3'>
                <span className='bi bi-person fs-3 ms-5'></span>
              </div>
            </Row>
        </Container>
    </>
  )
}
