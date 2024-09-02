import React from 'react'
import Form from 'react-bootstrap/Form';
import { CiSearch } from 'react-icons/ci';


const Search = () => {
  return (
    <div className='search-box'>
       <Form>
       
        <div id="search-box">
<div class="centered-form">
  <input type="search" name="search" className="search-tool" size="lg" placeholder="FIND YOUR FAVOURITES"
  id="box" />
  <button type="button" id="mag-container">
  <CiSearch className="search-tool"
          id="mag"/>
      </button>
      </div>
</div>
          
       
      </Form>
    </div>
  )
}

export default Search
