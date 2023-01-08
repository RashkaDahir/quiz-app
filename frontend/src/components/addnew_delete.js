import React from 'react'
import '../styles/addnew.css';
import { FaTrash } from "react-icons/fa";
import Addquestion from './addquestion';
import { Link } from 'react-router-dom'

export default function Addnew_delete() {
  return (
    <div className='big-container'>

    <div className=' container'>


    <Link to={'addquestion'} className="btn-1"  >Add Questions</Link>
      <button className='btn-2'>
      GDELETE
     <FaTrash/>
      </button>
    </div>
    </div>
  )
}
