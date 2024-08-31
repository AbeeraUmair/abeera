import React from 'react'
import Form from 'react-bootstrap/Form';


const Search = () => {
  return (
    <div className='search'>
       <Form>
        <Form.Group className="">
          <Form.Control type="search" size="lg" placeholder="FIND YOUR FAVOURITES" />
        </Form.Group>
      </Form>
    </div>
  )
}

export default Search
