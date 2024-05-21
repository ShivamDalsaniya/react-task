import React from 'react';
import { Container, Row } from 'react-bootstrap';
import AddTask from './AddTask';

export default function Dashboard() {
  return (
    <>
      <h3 className='p-2 mt-4'>Task Dashboard</h3>
      <hr />
      <Container className='p-4'>
        <Row>
          <div className='col-md-3 ms-5 border border-end-2 border-danger p-4'>
            <h5 className='text-center'>Total Customers</h5>
            <h5 className='text-center'><span className='badge badge-md bg-danger'>5</span></h5>
          </div>
          <div className='col-md-3 ms-5 border border-end-2 border-info p-4'>
            <h5 className='text-center'>Total Customers</h5>
            <h5 className='text-center'><span className='badge badge-md bg-danger'>5</span></h5>
          </div>
          <div className='col-md-3 ms-5 border border-end-2 border-primary p-4'>
            <h5 className='text-center'>Total Customers</h5>
            <h5 className='text-center'><span className='badge badge-md bg-danger'>5</span></h5>
          </div>
        </Row>
        <AddTask />
      </Container>
    </>
  );
}
