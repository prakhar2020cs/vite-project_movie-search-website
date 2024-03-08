import React from 'react'

const Searchbox = (props) => {
  return (
    <div className='col col-sm-4'>
     <input className='form-control' value={props.value} onChange={(e)=>props.Setsearchvalue(e.target.value)} placeholder='searching a movie?'></input>   
    </div>
  )
}

export default Searchbox