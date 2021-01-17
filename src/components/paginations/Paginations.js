import React from 'react'
import { Pagination, Container } from '@geist-ui/react';


const Paginations = () => {
  return (
    <div>
      <Container justify="center">
        <Pagination count={20} initialPage={3} />
      </Container>
    </div>
  
  )
}

export default Paginations;