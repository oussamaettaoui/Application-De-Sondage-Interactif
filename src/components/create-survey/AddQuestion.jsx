import React from 'react'

function AddQuestion(props) {
    const {addQsBox}=props

  return (
    <div className=''>
        <button type="button" onClick ={addQsBox} className="btn btn-lg mb-3 me-2 add"  >Add Question</button> 
    </div>
  )
}

export default AddQuestion