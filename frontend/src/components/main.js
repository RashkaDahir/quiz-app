
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setUserId } from '../Redux/result_reducer'
import '../styles/Main.css'

import addnew_delete from './addnew_delete'



export default function Main() {

    const inputRef = useRef(null)
    const dispatch = useDispatch()


    function startQuiz(){
        if(inputRef.current?.value){
            dispatch(setUserId(inputRef.current?.value))
        }
    }

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz-WebApp</h1>

        <ol>
            <li>Waxa Lagu Weydindona 5 Su'aalo</li>
            <li>halki suaal waxa lagu Siindona 10 dhibco</li>
            <li>Quiz Waxa lagu sixidona 50 dhibco</li>
            <li>Su'aasha jawaabteyda hada bixiso inta adan dhameynin dib wad ulaban karta</li>
            <li>Quiz marku dhamado waxa lagu siin Dona Resultigaga</li>
        </ol>

        <form id="form">
            <input ref={inputRef} className="userid" type="text" placeholder='GALI MAGACAGA' />
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'} onClick={startQuiz}>Start Quiz</Link>
        </div>

        <div className='start'>
            <Link class="button button1"  to={'Addnew_delete'}   >Start Quiz</Link>
        </div>


        

    </div>
  )
}